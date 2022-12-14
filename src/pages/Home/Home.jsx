import { useState, useEffect } from 'react';
import { fetchGetTrendMovies } from 'components/services/API';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation()

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
          <Link to={`movies/${id}`} state={{from: location}}>{title}</Link>
        </li>)}
    </ul>
    <Outlet/>
    </>
  );
};

export default Home