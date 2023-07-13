import { Configuration, OpenAIApi } from "openai";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const config = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export default openai;

export const getAIRecommendations = async (playlistDesc: string) => {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are to generate 10 songs based on the playlist description with the function given. You may infer what values should be entered into the function, do not add any parameters that arent already defined and the function MUST include the specified required parameters, those being seed_artists, limit, seed_genres, seed_tracks. Make sure you use every paramater given do not pick and choose which to include. The total number of seed artists, seed tracks, and seed genres must add up to 5 or less. The playlist description is as follows: " +
          playlistDesc,
      },
    ],
    functions: [
      {
        name: "generate_recommendations",
        description:
          "uses spotify's recommendations API to generate a list of recommended songs based on the playlist description.",
        parameters: {
          type: "object",
          properties: {
            limit: {
              type: "integer",
              description:
                "The target size of the list of recommended tracks. For seeds with unusually small pools or when highly restrictive filtering is applied, it may be impossible to generate the requested number of recommended tracks. Debugging information for such cases is available in the response. Default: 20. Minimum: 1. Maximum: 100.",
            },
            market: {
              type: "string",
              description:
                "An ISO 3166-1 alpha-2 country code or the string from_token. Provide this parameter if you want to apply Track Relinking.",
              example: "US",
              default: "US",
            },
            seed_artists: {
              type: "string",
              description:
                "A comma separated list of Spotify IDs for seed artists. Up to 5 seed values may be provided in any combination of seed_artists, seed_tracks and seed_genres.",
              example: "4NHQUGzhtTLFvgF5SZesLK",
            },
            seed_genres: {
              type: "string",
              description:
                "A comma separated list of any genres in the set of available genre seeds. Up to 5 seed values may be provided in any combination of seed_artists, seed_tracks and seed_genres.",
              example: "classical,country",
            },
            seed_tracks: {
              type: "string",
              description:
                "A comma separated list of Spotify IDs for a seed track. Up to 5 seed values may be provided in any combination of seed_artists, seed_tracks and seed_genres.",
              example: "0c6xIDDpzE81m2q797ordA",
            },
            min_acousticness: {
              type: "number",
              description:
                "Target value for acousticness. 0.0 <= min_acousticness <= 1.0",
            },
            max_acousticness: {
              type: "number",
              description:
                "Target value for acousticness. 0.0 <= max_acousticness <= 1.0",
            },
            target_acousticness: {
              type: "number",
              description:
                "Target value for acousticness. 0.0 <= target_acousticness <= 1.0",
            },
            min_danceability: {
              type: "number",
              description:
                "Target value for danceability. 0.0 <= min_danceability <= 1.0",
            },
            max_danceability: {
              type: "number",
              description:
                "Target value for danceability. 0.0 <= max_danceability <= 1.0",
            },
            target_danceability: {
              type: "number",
              description:
                "Target value for danceability. 0.0 <= target_danceability <= 1.0",
            },
            min_duration_ms: {
              type: "integer",
              description:
                "Target value for duration (ms). 0 <= min_duration_ms <= 86400000",
            },
            max_duration_ms: {
              type: "integer",
              description:
                "Target value for duration (ms). 0 <= max_duration_ms <= 86400000",
            },
            target_duration_ms: {
              type: "integer",
              description:
                "Target value for duration (ms). 0 <= target_duration_ms <= 86400000",
            },
            min_energy: {
              type: "number",
              description: "Target value for energy. 0.0 <= min_energy <= 1.0",
            },
            max_energy: {
              type: "number",
              description: "Target value for energy. 0.0 <= max_energy <= 1.0",
            },
            target_energy: {
              type: "number",
              description:
                "Target value for energy. 0.0 <= target_energy <= 1.0",
            },
            min_instrumentalness: {
              type: "number",
              description:
                "Target value for instrumentalness. 0.0 <= min_instrumentalness <= 1.0",
            },
            max_instrumentalness: {
              type: "number",
              description:
                "Target value for instrumentalness. 0.0 <= max_instrumentalness <= 1.0",
            },
            target_instrumentalness: {
              type: "number",
              description:
                "Target value for instrumentalness. 0.0 <= target_instrumentalness <= 1.0",
            },
            min_key: {
              type: "integer",
              description: "Target value for key. 0 <= min_key <= 11",
            },
            max_key: {
              type: "integer",
              description: "Target value for key. 0 <= max_key <= 11",
            },
            target_key: {
              type: "integer",
              description: "Target value for key. 0 <= target_key <= 11",
            },
            min_liveness: {
              type: "number",
              description:
                "Target value for liveness. 0.0 <= min_liveness <= 1.0",
            },
            max_liveness: {
              type: "number",
              description:
                "Target value for liveness. 0.0 <= max_liveness <= 1.0",
            },
            target_liveness: {
              type: "number",
              description:
                "Target value for liveness. 0.0 <= target_liveness <= 1.0",
            },
            min_loudness: {
              type: "number",
              description:
                "Target value for loudness. -60.0 <= min_loudness <= 0.0",
            },
            max_loudness: {
              type: "number",
              description:
                "Target value for loudness. -60.0 <= max_loudness <= 0.0",
            },
            target_loudness: {
              type: "number",
              description:
                "Target value for loudness. -60.0 <= target_loudness <= 0.0",
            },
            min_mode: {
              type: "integer",
              description: "Target value for mode. 0 <= min_mode <= 1",
            },
            max_mode: {
              type: "integer",
              description: "Target value for mode. 0 <= max_mode <= 1",
            },
            target_mode: {
              type: "integer",
              description: "Target value for mode. 0 <= target_mode <= 1",
            },
            min_popularity: {
              type: "integer",
              description:
                "Target value for popularity. 0 <= min_popularity <= 100",
            },
            max_popularity: {
              type: "integer",
              description:
                "Target value for popularity. 0 <= max_popularity <= 100",
            },
            target_popularity: {
              type: "integer",
              description:
                "Target value for popularity. 0 <= target_popularity <= 100",
            },
            min_speechiness: {
              type: "number",
              description:
                "Target value for speechiness. 0.0 <= min_speechiness <= 1.0",
            },
            max_speechiness: {
              type: "number",
              description:
                "Target value for speechiness. 0.0 <= max_speechiness <= 1.0",
            },
            target_speechiness: {
              type: "number",
              description:
                "Target value for speechiness. 0.0 <= target_speechiness <= 1.0",
            },
            min_tempo: {
              type: "number",
              description: "Target value for tempo. 0.0 <= min_tempo <= 1.0",
            },
            max_tempo: {
              type: "number",
              description: "Target value for tempo. 0.0 <= max_tempo <= 1.0",
            },
            target_tempo: {
              type: "number",
              description: "Target value for tempo. 0.0 <= target_tempo <= 1.0",
            },
            min_time_signature: {
              type: "integer",
              description:
                "Target value for time_signature. 0 <= min_time_signature <= 5",
            },
            max_time_signature: {
              type: "integer",
              description:
                "Target value for time_signature. 0 <= max_time_signature <= 5",
            },
            target_time_signature: {
              type: "integer",
              description:
                "Target value for time_signature. 0 <= target_time_signature <= 5",
            },
            min_valence: {
              type: "number",
              description:
                "Target value for valence. 0.0 <= min_valence <= 1.0",
            },
            max_valence: {
              type: "number",
              description:
                "Target value for valence. 0.0 <= max_valence <= 1.0",
            },
            target_valence: {
              type: "number",
              description:
                "Target value for valence. 0.0 <= target_valence <= 1.0",
            },
          },
          required: ["seed_artists", "limit", "seed_genres", "seed_tracks"],
        },
      },
    ],
    function_call: "auto",
  });

  return JSON.parse(
    response.data.choices[0]?.message?.function_call?.arguments as string
  );
};
