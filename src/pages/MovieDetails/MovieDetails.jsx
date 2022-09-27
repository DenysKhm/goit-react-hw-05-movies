// import { useState, useEffect } from "react"
// import { useParams } from "react-router-dom"
// import { fetchMovieById } from "components/services/API"
import { useFetchMovie } from 'components/hooks/useFetchMovie';
import { Outlet } from 'react-router-dom';
import { FilmDetail, FilmInfo, Title, H1, Text, Genre, NavLinkAI, AddInfo } from './MovieDerails.styled';

export const MovieDetails = () => {
  const movie = useFetchMovie();

  return (
    <>
      {movie && (
        <>
        <FilmDetail>
          <img
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
            alt={movie.title}
            width="200"
          />
          <FilmInfo>
            <H1>{movie.title}</H1>
            <Text>User score: {movie.vote_average}%</Text>
            <Title>Overview</Title>
            <Text>{movie.overview}</Text>
            <Title>Genres:</Title>
            <Text>
              {movie.genres.map(({ name, id }) => (
                <Genre key={id}>{name}</Genre>
              ))}
            </Text>
          </FilmInfo>
          </FilmDetail>
          <AddInfo>
            <p>Additional information</p>
            <NavLinkAI to={'cast'}>Cast</NavLinkAI>
            <NavLinkAI to={'reviews'}>Reviews</NavLinkAI>
          </AddInfo>
          <Outlet />
        </>
      )}
    </>
  );
};
