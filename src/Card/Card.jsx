import "./Card.css";

// eslint-disable-next-line no-unused-vars
export default function Card({title, image, handleClick}) {


  return (
    <div className="movie-card">
      <div className="movie-card__header">
        <img
          className="movie-card__img"
          src={image}
        />
      </div>
      <div className="movie-card__body">
        <h2>
          {title} <br />
          <span style={{ fontSize: "25px" }}>&#9989;</span>
        </h2>
        <button onClick={()=>{handleClick(title)}} className="movie-card__btn">เลือก</button>
      </div>
    </div>
  );
}
