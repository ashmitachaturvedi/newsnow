import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { getNTANews } from "../services/newsService";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function NTA() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const articles = await getNTANews();
      setNews(articles);
    };

    fetchNews();
  }, []);

  return (
    <>
    <Navbar />
      <h1>NTA News</h1>

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

export default NTA;