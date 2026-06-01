import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import NewsCard from "../components/NewsCard";

import { getTopNews,getNewsBySearch } from "../services/newsService";

function Home() {
  const [news, setNews] = useState([]);
  const[loading,setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
        setLoading(true);

      const articles = await getTopNews();

      if (articles && Array.isArray(articles) && articles.length > 0) {
        setNews(articles);
      }

      setLoading(false);
    };

 fetchNews();
  }, []);

  const handleSearch = async (query) => {
    setLoading(true);

    const articles = await getNewsBySearch(query);

    if (articles && articles.length > 0) {
        setNews(articles);
  }
  setLoading(false);
};
  return (
    <>
      <Navbar />

      <h1>Breaking News</h1>

      <SearchBar onSearch={handleSearch} />
      {loading && <h2>Loading News...</h2>}


      <p>Total News: {news.length}</p>
      {news.length === 0 && !loading && (
        <h2>No News Found</h2>
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
    </>
  );
}

export default Home;