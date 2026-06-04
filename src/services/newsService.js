const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;

export const getTopNews = async () => {
  try {
    const response = await fetch(
      "https://newsnow-68z3.onrender.com/api/top-news"
    );

    const data = await response.json();

    return data.articles || [];
  } catch (error) {
    console.log("ERROR:", error);
    return [];
  }
};

export const getNewsBySearch = async (query) => {
  try {
    const response = await fetch(
      `https://gnews.io/api/v4/search?q=${query}&lang=en&apikey=${API_KEY}`
    );

    const data = await response.json();

    return data.articles || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getIndiaNews = async () => {
  try {
    const response = await fetch(
      `https://gnews.io/api/v4/top-headlines?country=in&lang=en&apikey=${API_KEY}`
    );

    const data = await response.json();
    return data.articles || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getWorldNews = async () => {
  try {
    const response = await fetch(
  `https://gnews.io/api/v4/top-headlines?country=in&lang=en&max=50&apikey=${API_KEY}`
);
    const data = await response.json();
    return data.articles || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getUPSCNews = async () => {
  return getNewsBySearch("UPSC");
};

export const getNTANews = async () => {
  return getNewsBySearch("NTA OR JEE OR NEET");
};
