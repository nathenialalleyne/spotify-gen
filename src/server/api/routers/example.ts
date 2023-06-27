import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import getAccessToken from "@/utils/spotifyAccessToken";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ code: z.string() || z.null() }))
    .query(async ({ input }) => {
      const accessToken = await getAccessToken(input.code);
      return accessToken;
    }),
});
