import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-52 pl-4 relative z-20 pt-6">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.topRated} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.upComingMovies}
          />
          <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;