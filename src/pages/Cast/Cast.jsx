import { useFetchCast } from 'components/hooks/useFetchCast';
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchMovieCast } from 'components/services/API';

export const Cast = () => {
 const cast = useFetchCast()
console.log(cast)
  return (
    <>
      {cast && (
        <>
          <div>
            {cast.cast.map(i => {
                return <h2>{i.name}</h2>
            })}
            
          </div>
        </>
      )}
    </>
  );
};
