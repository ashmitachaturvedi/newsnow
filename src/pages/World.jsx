import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { getWorldNews } from "../services/newsService";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function World() {
  const [news, setNews] = useState([]);
  const[loading,setLoading] = useState([]);

  useEffect(() => {

    const fetchNews = async () => {
      try{
      setLoading(true);
      const articles = await getWorldNews();
      setNews(articles);
      }catch(error){
        console.log(error);
      }finally{
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
    <Navbar />
      <h1>World News</h1>
      {loading && (
        <>
        <div className="spinner"></div>
        <h2>Loading news....</h2>
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

export default World;