const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;
console.log(import.meta.env);
console.log("API KEY =", import.meta.env.VITE_GNEWS_API_KEY);

export const getTopNews = async () => {
  try {
    const response = await fetch(
      `https://gnews.io/api/v4/top-headlines?country=in&lang=en&apikey=${API_KEY}`
    );

    const data = await response.json();

    console.log(data);

    return data.articles || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};