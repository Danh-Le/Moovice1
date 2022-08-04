const Card = (props) => {
  return (
    <div className="w-25 border border-4 rounded-2 p-4">
      <img className="w-75" src={props.poster} alt="moviePoster" />
      <h2>{props.title}</h2>
      <p className="">{props.description}</p>
      <p>{props.year}</p>
    </div>
  );
};
export default Card;
