import { useState, useEffect } from 'react';
import { fetchGetTrendMovies } from 'components/services/API';
import { Link, Outlet } from 'react-router-dom';

export const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    fetchGetTrendMovies().then(({ results }) => setTrendMovies(results));
  }, []);

//   useEffect(() => {
//     fetchGetTrendMovies().then(setTrendMovies);
//   }, []);

  return (
    <>
    <h1>Trend Movies</h1>
    <ul>
      {trendMovies.map(({ title, id}) => <li key={id}>
          <Link to={`movies/${id}`}>{title}</Link>
        </li>)}
    </ul>
    <Outlet/>
    </>
  );
};
