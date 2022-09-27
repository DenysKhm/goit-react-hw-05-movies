import { useFetchCast } from 'components/hooks/useFetchCast';
import { Casts, Item, Actor } from './Cast.styled';

export const Cast = () => {
  const cast = useFetchCast();

  return (
    <>
      {cast && (
        <>
          <Casts>
            {cast.cast.map(({ id, name, character, profile_path }) => {
              return (
                <Item key={id}>
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`} alt={name}/>
                  <Actor>{name}</Actor>
                  <p>{character}</p>
                </Item>
              );
            })}
          </Casts>
        </>
      )}
    </>
  );
};
