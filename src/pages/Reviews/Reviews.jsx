import { useFetchReviews } from 'components/hooks/useFetchReviews';
import { Item, H3, P } from './Reviews.styled';

export const Reviews = () => {
  const reviews = useFetchReviews();

  return (
    <>
      {reviews && (
        <>
          {reviews.results.length > 0 ? (
            <div>
              {reviews.results.map(({ id, author, content }) => {
                return (
                  <Item key={id}>
                    <H3>{author}:</H3>
                    <P>"{content}"</P>
                  </Item>
                );
              })}
            </div>
          ) : (
            <p>We don't have any reviews for this movie</p>
          )}
        </>
      )}
    </>
  );
};
