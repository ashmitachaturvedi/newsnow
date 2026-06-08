const BASE_URL = "https://newsnow-68z3.onrender.com";

export const getTopNews = async () => {
  try {
    const response = await fetch(
      "https://newsnow-68z3.onrender.com/api/rss-news"
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
      `${BASE_URL}/api/search?q=${query}`
    );

    const data = await response.json();

    return data.articles || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getIndiaNews = async () => {
  return getTopNews();
}
//   try {
//     const response = await fetch(
//       `${BASE_URL}/api/india`
//     );

//     const data = await response.json();

//     return data.articles || [];
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// };

export const getWorldNews = async () => {
  return getTopNews();
}
//   try {
//     const response = await fetch(
//       `${BASE_URL}/api/world`
//     );

//     const data = await response.json();

//     return data.articles || [];
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// };

export const getUPSCNews = async () => {
  return getTopNews();
}
//   try {
//     const response = await fetch(
//       `${BASE_URL}/api/upsc`
//     );

//     const data = await response.json();

//     return data.articles || [];
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// };

export const getNTANews = async () => {
  return getTopNews();
}
//   try {
//     const response = await fetch(
//       `${BASE_URL}/api/nta`
//     );

//     const data = await response.json();

//     return data.articles || [];
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// };
