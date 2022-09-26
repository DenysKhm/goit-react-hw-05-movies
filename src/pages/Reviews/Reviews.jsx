import { useFetchReviews } from 'components/hooks/useFetchReviews';

export const Reviews = () => {
  const reviews = useFetchReviews();

  return (
    <>
      {reviews && (
        <>
          <div>
            {reviews.map(({ author, content, id }) => (
              <li key={id}>
                <p>{author}</p>
                <p>{content}</p>
              </li>
            ))}
          </div>
        </>
      )}
    </>
  );
};
