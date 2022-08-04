import { useEffect, useState } from "react";
import Card from "../components/Card";

const Popular = () => {
  const [apiKey] = useState("60790faf961e96a726ed4a1977407622");
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    const request = await fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`
    );
    const response = await request.json();
    setPopularMovies(response.results);
  };
  return (
    <div className="text-center d-flex flex-wrap justify-content-around">
      {/* <h1>Popular Movies</h1> */}
      {popularMovies.map((popularMovie) => {
        return (
          <Card
            className=""
            key={popularMovie.backdrop_path}
            poster={`https://image.tmdb.org/t/p/w300/${popularMovie.poster_path}`}
            title={popularMovie.title}
            year={popularMovie.release_date}
            description={popularMovie.overview}
          />
        );
      })}
    </div>
  );
};

export default Popular;
