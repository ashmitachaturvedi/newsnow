function NewsCard({ title, description, image, url,showSaveButton = true, }) {

  const saveArticle = async () => {
    try {
      const article = {
        title,
        description,
        image,
        url,
      };

      const token = localStorage.getItem("token");

      const response = await fetch(
        "https://newsnow-68z3.onrender.com/api/bookmarks",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: token,
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

    {image && (
  <img
    src={image}
    alt=""
    onError={(e) => {
      e.target.style.display = "none";
    }}
  />
)}
  
  

      <h3>{title}</h3>

      <p>{description}</p>

      {url && (
        <a href={url} target="_blank" rel="noreferrer">
          Read More →
        </a>
      )}
      {showSaveButton && (
        <button onClick={saveArticle}>
        ⭐ Save
      </button>
      )}
      
    </div>
  );
}

export default NewsCard;
