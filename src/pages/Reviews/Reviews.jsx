import { useFetchReviews } from 'components/hooks/useFetchReviews';

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
                  <li key={id}>
                    <p>{author}</p>
                    <p>{content}</p>
                  </li>
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
