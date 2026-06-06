import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Saved() {
  const [savedNews, setSavedNews] = useState([]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/bookmarks"
        );

        const data = await response.json();

        setSavedNews(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBookmarks();
  }, []);

  const removeBookmark = async (id) => {
    try {
      await fetch(
        `http://localhost:5000/api/bookmarks/${id}`,
        {
          method: "DELETE",
        }
      );

      setSavedNews(
        savedNews.filter(
          (article) => article._id !== id
        )
      );

      alert("Bookmark Removed!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <h1>Saved Articles</h1>

      <h3>Total Saved: {savedNews.length}</h3>

      {savedNews.length === 0 ? (
        <h2>No Saved Articles</h2>
      ) : (
        savedNews.map((article) => (
          <div key={article._id}>
            <NewsCard
              title={article.title}
              description={article.description}
              image={article.image}
              url={article.url}
            />

            <button
              onClick={() =>
                removeBookmark(article._id)
              }
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