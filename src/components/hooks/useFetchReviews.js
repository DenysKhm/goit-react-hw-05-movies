import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchMovieReviews } from "components/services/API"

export const useFetchReviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState('');

    useEffect(() => {
        fetchMovieReviews(movieId).then(setReviews)
    },[movieId])
    return reviews
}