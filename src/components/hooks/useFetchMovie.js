import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchMovieById, fetchMovieCast } from "components/services/API"

export const useFetchMovie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);
  return movie
};

export const useFetchCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([null]);

    useEffect(() => {
        fetchMovieCast(movieId).then(setCast)
    },[movieId])
    return cast
}