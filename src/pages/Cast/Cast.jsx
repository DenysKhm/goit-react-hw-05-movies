import { useFetchCast } from 'components/hooks/useFetchCast';

export const Cast = () => {
  const cast = useFetchCast();

  return (
    <>
      {cast && (
        <>
          <div>
            {cast.cast.map(({ id, name, character, profile_path }) => {
              return (
                <li key={id}>
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`} alt={name} width='100'/>
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
