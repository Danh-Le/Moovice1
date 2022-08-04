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

  const handleFavoritesClick = (id) => {
    if (localStorage.favoriteIds === undefined) {
      const favoriteIds = [];
      favoriteIds.push(id);
      const strigifiedFavoriteIds = JSON.stringify(favoriteIds);
      localStorage.setItem("favoriteIds", strigifiedFavoriteIds);
    } else {
      const localStorageFavoriteIds = localStorage.getItem("favoriteIds");
      const favoriteIds = JSON.parse(localStorageFavoriteIds);
      const index = favoriteIds.indexOf(id);
      if (index === -1) {
        favoriteIds.push(id);
        const strigifiedFavoriteIds = JSON.stringify(favoriteIds);
        localStorage.setItem("favoriteIds", strigifiedFavoriteIds);
      }
    }
  };

  return (
    <div className="text-center d-flex flex-wrap justify-content-around ">
      {/* <h1>Popular Movies</h1> */}
      {popularMovies.map((popularMovie) => {
        return (
          <>
            <Card
              key={popularMovie.backdrop_path}
              poster={`https://image.tmdb.org/t/p/w300/${popularMovie.poster_path}`}
              title={popularMovie.title}
              year={popularMovie.release_date}
              description={popularMovie.overview}
            />
            <button onClick={() => handleFavoritesClick(popularMovie.id)}>
              Add to favorites
            </button>
          </>
        );
      })}
    </div>
  );
};

export default Popular;
