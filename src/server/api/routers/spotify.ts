import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { supabase } from "@/lib/supabaseClient";
import { TRPCClientError } from "@trpc/client";
import { TRPCError } from "@trpc/server";
import openai, { getAIRecommendations } from "@/utils/openai";
import { stdout } from "process";

const session = await supabase.auth.getSession();

export const spotifyRouter = createTRPCRouter({
  createPlaylist: publicProcedure
    .input(
      z.object({ provider_token: z.string(), playlist_description: z.string() })
    )
    .query(async ({ input }) => {
      if (session.data) {
        const aiRecommendation = await getAIRecommendations(
          input.playlist_description
        );

        if (!aiRecommendation) {
          throw new TRPCError({ code: "BAD_REQUEST" });
        }

        const queryString = Object.keys(aiRecommendation)
          .map(
            (key) =>
              `${encodeURIComponent(key)}=${encodeURIComponent(
                aiRecommendation[key]
              )}`
          )
          .join("&");

        const addTracks = await fetch(
          "https://api.spotify.com/v1/recommendations?" + queryString,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${input.provider_token}}`,
            },
          }
        );

        const jsonTracks = await addTracks.json();
        const trackIDs = jsonTracks.tracks.map((track: any) => track.uri);

        const getID = await fetch(`https://api.spotify.com/v1/me`, {
          headers: {
            Authorization: `Bearer ${input.provider_token}}`,
          },
        });
        const jsonID = await getID.json();
        const userID = jsonID.id;
        const createPlaylist = await fetch(
          `https://api.spotify.com/v1/users/${userID}/playlists`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${input.provider_token}}`,
            },
            body: JSON.stringify({
              name: "New Playlist",
              description: "New playlist description",
              public: true,
            }),
          }
        );
        const jsonPlaylist = await createPlaylist.json();
        const playlistID = await jsonPlaylist.id;

        if (!playlistID) {
          throw new TRPCError({ code: "BAD_REQUEST" });
        }

        const addToPlaylist = await fetch(
          `https://api.spotify.com/v1/playlists/${playlistID}/tracks`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${input.provider_token}}`,
            },
            body: JSON.stringify({
              uris: trackIDs,
            }),
          }
        );

        return playlistID;
      }
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }),
});
