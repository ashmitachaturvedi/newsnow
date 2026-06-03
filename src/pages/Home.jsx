import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import NewsCard from "../components/NewsCard";
import Footer from "../components/Footer";

import { getTopNews,getNewsBySearch } from "../services/newsService";

function Home() {
  const [news, setNews] = useState([]);
  const[loading,setLoading] = useState(false);
  const[error,setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try{
        setLoading(true);
        setError("");

      const articles = await getTopNews();

      if (articles &&  articles.length > 0) {
        setNews(articles);
      }
      else{
        setError("No news found");
      }
    }
    catch(err){
      setError("Unable to load news");
    }finally{
      setLoading(false);
    }
    };

 fetchNews();
  }, []);

  const handleSearch = async (query) => {
    try{
    setLoading(true);
    setError("");

    const articles = await getNewsBySearch(query);

    if (articles && articles.length > 0) {
        setNews(articles);
  }else{
    setNews([]);
    setError("No news found");
  }
}catch(err){
  setError("Unable to load news");
}finally{
  setLoading(false);
}
};
  return (
    <>
      <Navbar />

      <h1>Breaking News</h1>

      <SearchBar onSearch={handleSearch} />
      {loading && (
        <>
        <div className="spinner"></div>
        <h2>Loading News....</h2>
        </>
      )}
      
      {error && <h2>{error}</h2>}


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


export default Home;
