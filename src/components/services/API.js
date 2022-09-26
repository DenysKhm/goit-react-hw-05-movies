import axios from "axios";

const KEY = '007a4826f670f8c4fc5714195603888e'
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'
axios.defaults.params = { api_key: KEY};

export async function fetchGetTrendMovies() {
    const response = await axios.get('trending/movie/day')
    return response.data
}

export async function fetchSearchMovieByWord(query = '', page = 1) {
    const response = await axios.get(`search/movie?query=${query}&page=${page}`);
    return response.data;
  }

export async function fetchMovieById(movieId) {
    const response = await axios.get(`/movie/${movieId}`)
    return response.data
}


export async function fetchMovieCast(movie_id) {
    const response = await axios.get(`movie/${movie_id}/credits`)
    return response.data
}


export async function fetchMovieReviews(movie_id) {
    const response = await axios.get(`movie/${movie_id}/reviews`)
    return response.data
}




