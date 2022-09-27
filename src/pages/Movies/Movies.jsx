import { useState, useEffect } from 'react';
import { Outlet, Link, useSearchParams, useLocation } from 'react-router-dom';
import { fetchSearchMovieByWord } from 'components/services/API';

export const Movies = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const querySearch = searchParams.get('search');
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements[0].value;
    setSearchParams({ search: query });
    form.reset();
  };

  useEffect(() => {
    console.log(querySearch);
    if (!querySearch) return;
    fetchSearchMovieByWord(querySearch).then(setSearchMovie);
  }, [querySearch]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="movieName" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchMovie &&
          searchMovie.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{from: location}}>{title}</Link>
            </li>
          ))}
      </ul>
      <Outlet />
    </>
  );
};
