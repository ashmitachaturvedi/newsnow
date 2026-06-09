import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { getNTANews } from "../services/newsService";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function NTA() {
  const [news, setNews] = useState([]);
  const[loading,setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try{
      setLoading(true);
      const articles = await getNTANews();
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
      <h1>NTA News</h1>
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

export default NTA;