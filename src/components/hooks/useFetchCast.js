import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchMovieCast } from "components/services/API"


export const useFetchCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState('');

    useEffect(() => {
        fetchMovieCast(movieId).then(setCast)
    },[movieId])
    return cast
}