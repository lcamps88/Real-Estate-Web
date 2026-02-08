import axios from 'axios'

let tokenCache = {
  accessToken: null,
  expiresIn: null,
  expiresAt: null,
}

export async function getToken(forceRenew = false) {
  // Verification valid token
  if (
    !forceRenew &&
    tokenCache.accessToken &&
    new Date() < tokenCache.expiresAt
  ) {
    return tokenCache.accessToken
  }

  const response = await axios.post(
    'https://realtyfeed-sso.auth.us-east-1.amazoncognito.com/oauth2/token',
    new URLSearchParams({
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
      client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      grant_type: 'client_credentials',
    }),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'gzip, deflate, br',
        Accept: '*/*',
        'x-api-key': process.env.NEXT_PUBLIC_MLS_API_KEY,
      },
    }
  )

  const { access_token, expires_in } = response.data
  tokenCache.accessToken = access_token
  tokenCache.expiresIn = expires_in
  tokenCache.expiresAt = new Date(new Date().getTime() + expires_in * 1000)

  return tokenCache.accessToken
}
