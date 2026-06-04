import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Saved() {
  const [savedNews, setSavedNews] = useState([]);

  useEffect(() => {
    const news =
      JSON.parse(localStorage.getItem("savedNews")) || [];

    setSavedNews(news);
  }, []);

  const removeArticle = (url) => {
    const updatedNews = savedNews.filter(
      (article) => article.url !== url
    );

    localStorage.setItem(
      "savedNews",
      JSON.stringify(updatedNews)
    );

    setSavedNews(updatedNews);
  };

  return (
    <>
      <Navbar />

      <h1>Saved Articles</h1>

      {savedNews.length === 0 ? (
        <h2>No Saved Articles</h2>
      ) : (
        savedNews.map((article, index) => (
          <div key={index}>
            <NewsCard
              title={article.title}
              description={article.description}
              image={article.image}
              url={article.url}
            />

            <button
              onClick={() => removeArticle(article.url)}
            >
              ❌ Remove Bookmark
            </button>
          </div>
        ))
      )}

      <Footer />
    </>
  );
}

export default Saved;