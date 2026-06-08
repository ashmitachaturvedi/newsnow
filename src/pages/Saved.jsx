import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Saved() {
  const [savedNews, setSavedNews] = useState([]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch(
          "http://localhost:5000/api/bookmarks",
          {
            headers: {
      authorization: token,
    },
  }
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
      const token = localStorage.getItem("token");

      await fetch(
        `http://localhost:5000/api/bookmarks/${id}`,
        {
          method: "DELETE",
           headers: {
      authorization: token,
    },
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
              showSaveButton={false}
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