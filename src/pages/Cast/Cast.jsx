import { useFetchCast } from 'components/hooks/useFetchCast';

export const Cast = () => {
  const cast = useFetchCast();

  return (
    <>
      {cast && (
        <>
          <div>
            {cast.cast.map(({ id, name, character }) => {
              return (
                <li key={id}>
                  <p>{name}</p>
                  <p>{character}</p>
                </li>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
