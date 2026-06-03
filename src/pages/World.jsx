import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { getWorldNews } from "../services/newsService";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function World() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const articles = await getWorldNews();
      setNews(articles);
    };

    fetchNews();
  }, []);

  return (
    <>
    <Navbar />
      <h1>World News</h1>

      {news.map((article, index) => (
        <NewsCard
          key={index}
          title={article.title}
          description={article.description}
          image={article.image}
          url={article.url}
        />
      ))}
      <Footer/>
    </>
  );
}

export default World;