import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { supabase } from "@/lib/supabaseClient";
import { TRPCClientError } from "@trpc/client";
import { TRPCError } from "@trpc/server";

const session = await supabase.auth.getSession();

export const spotifyRouter = createTRPCRouter({
  createPlaylist: publicProcedure
    .input(z.object({ provider_token: z.string() }))
    .query(async ({ input }) => {
      if (session.data) {
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

        return jsonPlaylist;
        const response = await fetch(`https://api.spotify.com/v1/`, {
          headers: {
            Authorization: `Bearer ${input.provider_token}}`,
          },
        });
        const json = await response.json();
        return json;
      }
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }),
});
