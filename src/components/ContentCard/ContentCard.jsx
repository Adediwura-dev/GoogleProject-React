import "./ContentCard.css";

const ContentCard = ({ id, title, description, buttonText, image }) => {
  return (
    <section className="content-card" id={id}>
      <div className="content-card-text">
        <h2>{title}</h2>
        <p>{description}</p>
        <button>{buttonText}</button>
      </div>

      <div className="content-card-image">
        <img src={image} alt={title} />
      </div>
    </section>
  );
};

export default ContentCard;

export default ContentCard;