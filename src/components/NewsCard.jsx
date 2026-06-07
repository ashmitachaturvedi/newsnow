function NewsCard({ title, description, image, url }) {

  const saveArticle = async () => {
    try {
      const article = {
        title,
        description,
        image,
        url,
      };

      const response = await fetch(
        "http://localhost:5000/api/bookmarks",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(article),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("News Saved!");
      } else {
        alert(data.message);
      }

    } catch (error) {
      console.log(error);
      alert("Failed to save news");
    }
  };

  return (
    <div className="card">

      <img
  src={
    image ||
    "https://via.placeholder.com/600x350?text=NewsNow"
  }
  alt={title}
/>
  

      <h3>{title}</h3>

      <p>{description}</p>

      {url && (
        <a href={url} target="_blank" rel="noreferrer">
          Read More →
        </a>
      )}

      <button onClick={saveArticle}>
        ⭐ Save
      </button>
    </div>
  );
}

export default NewsCard;
