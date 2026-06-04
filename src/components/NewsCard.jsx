function NewsCard({ title, description, image, url }) {

  const saveArticle = () => {
    const article = {
      title,
      description,
      image,
      url,
    };

    let savedNews =
      JSON.parse(localStorage.getItem("savedNews")) || [];

      const alreadySaved = savedNews.some(
    (item) => item.url === url
  );

  if (alreadySaved) {
    alert("Already Saved!");
    return;
  }
   savedNews.push(article);

    localStorage.setItem(
      "savedNews",
      JSON.stringify(savedNews)
    );

    alert("News Saved!");
  };

  return (
    <div className="card">
      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p>{description}</p>

      <a href={url} target="_blank" rel="noreferrer">
        Read More →
      </a>

      <button onClick={saveArticle}>
        ⭐ Save
      </button>
    </div>
  );
}

export default NewsCard;