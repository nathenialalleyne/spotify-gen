import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { supabase } from "@/lib/supabaseClient";
import { TRPCClientError } from "@trpc/client";
import { TRPCError } from "@trpc/server";
import openai, { getAIRecommendations } from "@/utils/openai";
import { stdout } from "process";

const session = await supabase.auth.getSession();

async function aiData(input: string) {
  try {
    const aiRecommendation = await getAIRecommendations(input);

    if (!aiRecommendation) {
      throw new TRPCError({ code: "BAD_REQUEST" });
    }

    if (typeof aiRecommendation === "string") {
      return aiRecommendation;
    }

    const queryString = Object.keys(aiRecommendation)
      .map(
        (key) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(
            aiRecommendation[key]
          )}`
      )
      .join("&");

    return queryString;
  } catch (err) {
    throw err;
  }
}

async function getRecommendedTracks(
  provider_token: string,
  aiRecommendation: string
) {
  try {
    return await fetch(
      "https://api.spotify.com/v1/recommendations?" + aiRecommendation,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${provider_token}`,
        },
      }
    ).then((res) => res.json());
  } catch (err) {
    throw err;
  }
}

async function getSpotifyID(provider_token: string) {
  try {
    const getID = await fetch(`https://api.spotify.com/v1/me`, {
      headers: {
        Authorization: `Bearer ${provider_token}`,
      },
    });
    const jsonID = await getID.json();
    const userID = jsonID.id;
    return userID;
  } catch (err) {
    throw err;
  }
}

async function createPlaylist(provider_token: string, userID: string) {
  try {
    const createPlaylist = await fetch(
      `https://api.spotify.com/v1/users/${userID}/playlists`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${provider_token}`,
        },
        body: JSON.stringify({
          name: "New Playlist",
          description: "New playlist description",
          public: true,
        }),
      }
    );

    const jsonPlaylist = await createPlaylist.json();
    return jsonPlaylist.id;
  } catch (err) {
    throw err;
  }
}

async function addSongsToPlaylist(
  playlistID: string,
  provider_token: string,
  trackIDs: string[]
) {
  try {
    const addToPlaylist = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistID}/tracks`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${provider_token}`,
        },
        body: JSON.stringify({
          uris: trackIDs,
        }),
      }
    );
    return addToPlaylist;
  } catch (err) {
    throw err;
  }
}

export const spotifyRouter = createTRPCRouter({
  createPlaylist: publicProcedure
    .input(
      z.object({ provider_token: z.string(), playlist_description: z.string() })
    )
    .query(async ({ input }) => {
      try {
        if (session.data) {
          const aiRecommendation = await aiData(input.playlist_description);
          const recommendedTracks = await getRecommendedTracks(
            input.provider_token,
            aiRecommendation
          );
          const trackIDs = recommendedTracks.tracks.map(
            (track: any) => track.uri
          );

          const getUserSpotifyID = await getSpotifyID(input.provider_token);
          const getPlaylistID = await createPlaylist(
            input.provider_token,
            getUserSpotifyID
          );

          const addToPlaylist = await addSongsToPlaylist(
            getPlaylistID,
            input.provider_token,
            trackIDs
          );

          await addToPlaylist;

          return getPlaylistID;
        }
        throw new TRPCError({ code: "UNAUTHORIZED" });
      } catch (err) {
        console.log(err);
        throw err;
      }
    }),
});
