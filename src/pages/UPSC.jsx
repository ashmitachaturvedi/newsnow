import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { getUPSCNews } from "../services/newsService";
import Navbar from "../components/Navbar";

function UPSC() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const articles = await getUPSCNews();
      setNews(articles);
    };

    fetchNews();
  }, []);

  return (
    <>
    <Navbar/>
      <h1>UPSC News</h1>
      <h2>Total News: {news.length}</h2>

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

export default UPSC;