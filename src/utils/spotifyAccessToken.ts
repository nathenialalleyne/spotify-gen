const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

export default async function getAccessToken(authorizationCode: string) {
  const tokenEndpoint = "https://accounts.spotify.com/api/token";

  const data = {
    grant_type: "authorization_code",
    code: authorizationCode,
    redirect_uri: redirectUri,
  };

  const response = await fetch(tokenEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(clientId + ":" + clientSecret).toString("base64"),
    },
    body: JSON.stringify(data),
  });

  const json = await response.json();

  return json.access_token;
}
