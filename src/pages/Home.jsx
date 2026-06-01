import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import NewsCard from "../components/NewsCard";

import { getTopNews } from "../services/newsService";

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const articles = await getTopNews();

      console.log("Articles received:", articles);
      console.log("Length:", articles?.length);

      // Sirf tab update karo jab articles mile hon
      if (articles && Array.isArray(articles) && articles.length > 0) {
        setNews(articles);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <Navbar />

      <h1>Breaking News</h1>

      <SearchBar />

      <p>Total News: {news.length}</p>

      {news.map((article, index) => (
        <NewsCard
          key={index}
          title={article.title}
          description={article.description}
          image={article.image}
          url={article.url}
        />
      ))}
    </>
  );
}

export default Home;