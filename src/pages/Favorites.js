import { useEffect, useState } from "react";
import Card from "../components/Card";

const Favorites = () => {
  const [apiKey] = useState("60790faf961e96a726ed4a1977407622");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchFavorites();
    // eslint-disable-next-line
  }, []);

  const fetchFavorites = async () => {
    const strigifiedFavoriteIds = localStorage.getItem("favoriteIds");
    const favoriteIds = JSON.parse(strigifiedFavoriteIds);
    const promises = favoriteIds.map((id) => {
      return fetchMovie(id);
    });
    const promisesAllResult = await Promise.all(promises);
    setMovies(promisesAllResult);
  };

  const fetchMovie = async (id) => {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    );
    const response = await request.json();
    return response;
  };
  const handleRemoveFavoriteClick = (index) => {
    const strigifiedFavoriteIds = localStorage.getItem("favoriteIds");
    const favoriteIds = JSON.parse(strigifiedFavoriteIds);
    favoriteIds.splice(index, 1);
    const strigifiedSplicedFavoriteIds = JSON.stringify(favoriteIds);
    localStorage.setItem("favoriteIds", strigifiedSplicedFavoriteIds);
    fetchFavorites();
  };
  return (
    <section>
      <h1>Favorites</h1>
      {movies.map((movie, index) => {
        return (
          <article className="text-center d-flex flex-wrap justify-content-around flex-column">
            <Card
              key={movie.backdrop_path}
              poster={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              title={movie.title}
              year={movie.release_date}
              description={movie.overview}
            />
            <button
              className="btn btn-warning"
              onClick={() => handleRemoveFavoriteClick(index)}
            >
              Remove
            </button>
          </article>
        );
      })}
    </section>
  );
};
export default Favorites;
