import { fetchMovieReviews } from 'api-services/fetchMovieReviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(res => setReviews(res))
      .catch(console.log(Error));
  }, [movieId]);

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <li key={review.id}>
            <h2>Author: {review.author}</h2>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <li>
          <p>We don't have any reviews for this movie</p>
        </li>
      )}
    </ul>
  );
};

export default Reviews;
