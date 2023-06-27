const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

export default async function getAccessToken(authorizationCode: string) {
  const tokenEndpoint = "https://accounts.spotify.com/api/token";

  const data = {
    grant_type: "authorization_code",
    code: authorizationCode,
    redirect_uri: redirectUri,
    client_id: clientId,
    client_secret: clientSecret,
  };

  const response = await fetch(tokenEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(data as Record<string, string>),
  });

  const json = await response.json();

  return json.access_token;
}
