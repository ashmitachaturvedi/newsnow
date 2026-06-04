import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { getUPSCNews } from "../services/newsService";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function UPSC() {
  const [news, setNews] = useState([]);
  const[loading,setLoading] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const articles = await getUPSCNews();
      setNews(articles);
    };

    fetchNews();
  }, []);

  return (
    <>
    <Navbar/>
      <h1>UPSC News</h1>
      {loading && (
        <> 
        <div className="spinner"></div>
        <h2>Loading news...</h2>
        </>
      )}

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

export default UPSC;