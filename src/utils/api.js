let currentApiKeyIndex = 0; 
const apiKeys = [
  process.env.REACT_APP_YOUTUBE_API_KEY_1,
  process.env.REACT_APP_YOUTUBE_API_KEY_2,
  process.env.REACT_APP_YOUTUBE_API_KEY_3,
  process.env.REACT_APP_YOUTUBE_API_KEY_4,
];

const fetchFromApi = async (url) => {
  try {
    const response = await fetch(`${url}&key=${apiKeys[currentApiKeyIndex]}`);

    if (!response.ok) {
      if (response.status === 403) {
        console.error("API Key limit reached. Switching to the next key...");
        currentApiKeyIndex = (currentApiKeyIndex + 1) % apiKeys.length;
        return fetchFromApi(url);
      }
      throw new Error(`Failed to load resource: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Unexpected Application Error!");
  }
};

export default fetchFromApi;
