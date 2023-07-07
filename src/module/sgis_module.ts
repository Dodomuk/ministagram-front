import axios from 'axios';

export async function getAccessKey() {
  try {
    let result = '';
    await axios
      .get(`/api/OpenAPI3/auth/authentication.json`, {
        params: {
          consumer_key: import.meta.env.VITE_SGIS_SERVICE_ID,
          consumer_secret: import.meta.env.VITE_SGIS_API_KEY,
        },
      })
      .then((res) => {
        console.debug('인증 처리 >> ', res.data);
        result = res.data.result.accessToken;
      });
    return result;
  } catch (error) {
    throw error;
  }
}
