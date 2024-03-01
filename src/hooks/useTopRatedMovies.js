import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const addTopRated = useSelector((store) => store.movies.topRated);

  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("trending", json)
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !addTopRated && getTopRated();
  }, []);
};

export default useTopRatedMovies;