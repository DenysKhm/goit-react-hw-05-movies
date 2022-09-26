import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchMovieById } from "components/services/API"

export const useFetchMovie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);
  return movie
};
