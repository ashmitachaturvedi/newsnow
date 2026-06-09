import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { getIndiaNews } from "../services/newsService";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function India() {
  const [news, setNews] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try{
      setLoading(true);

      const articles = await getIndiaNews();
      console.log("INDIA ARTICLES:", articles);
      setNews(articles);
      } catch(error){
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
      <h1>India News</h1>
      {loading && (
        <>
        <div className="spinner"></div>
        <h2>Loading news ....</h2>
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

export default India;