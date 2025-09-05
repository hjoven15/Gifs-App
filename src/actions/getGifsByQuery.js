import axios from "axios";

export const getGifsByQuery = async (query) => {
  const limit = 5;
  const offset = 0;
  const rating = "g";
  const lang = "en";
  const bundle = "messaging_non_clips";
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

  /* utilizando fetch
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}&bundle=${bundle}`;
  */

  /* utilizando axios */
  const url = "https://api.giphy.com/v1/gifs/search";
  const response = await axios.get(url, {
    params: {
      api_key: apiKey,
      q: query,
      limit: limit,
      offset: offset,
      rating: rating,
      lang: lang,
      bundle: bundle,
    },
  });

  const data = response.data.data;

  const responseMap = data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.original.url,
    };
  });
  return responseMap;
};
