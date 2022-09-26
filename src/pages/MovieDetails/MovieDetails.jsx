// import { useState, useEffect } from "react"
// import { useParams } from "react-router-dom"
// import { fetchMovieById } from "components/services/API"
import { useFetchMovie } from 'components/hooks/useFetchMovie';
import { NavLink, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  const movie = useFetchMovie();

  return (
    <>
      {movie && (
        <>
          <div>
            <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt={movie.title} width='200'/>
          </div>
          <div>
            <h2>{movie.title}</h2>
            <p>User score: {movie.vote_average}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <p>{movie.genres.map(({ name, id }) => (<span key={id}>{name}</span>))}</p>
          </div>
          <div>
           <p>Additional information</p>
          <NavLink to={'cast'}>Cast</NavLink>
          <NavLink to={'reviews'}>Reviews</NavLink>
          </div>
          <Outlet/>
        </>
      )}
    </>
  );
};
