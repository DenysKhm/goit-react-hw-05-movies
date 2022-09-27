import { useFetchMovie } from 'components/hooks/useFetchMovie';
import { Outlet } from 'react-router-dom';
import { FilmDetail, FilmInfo, Title, H1, Text, Genre, NavLinkAI, AddInfo, GoBack } from './MovieDerails.styled';
import { useNavigate, useLocation } from "react-router-dom";

const MovieDetails = () => {
  const movie = useFetchMovie();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  return (
    <>
      {movie && (
        <>
        <GoBack onClick={() => navigate(location?.state?.from ?? '/')}>Go back</GoBack>
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
            <NavLinkAI to={'cast'} state={location.state}>Cast</NavLinkAI>
            <NavLinkAI to={'reviews'} state={location.state}>Reviews</NavLinkAI>
          </AddInfo>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails
