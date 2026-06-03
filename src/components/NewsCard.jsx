function NewsCard({ title, description, image, url }) {
  return (
    <div className="card">

      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p>{description}</p>

      <a href={url} target="_blank" rel="noreferrer">
        Read More →
      </a>
    </div>
  );
}

export default NewsCard;