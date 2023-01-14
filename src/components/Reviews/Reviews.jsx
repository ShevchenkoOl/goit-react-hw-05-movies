import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as API from '../../services/api';
import { ReviewText } from './ReviewsStyled';
import { ReviewsItem } from './ReviewsItem';
import { Spinner } from '../AppStyled';

const Reviews = () => {
  const [review, setReview] = useState(null);
  const [noData, setNoData] = useState(false);
  const { movieId } = useParams();

  //Получаем даннык об актёрах и пока загружаем включаем спиннер
  useEffect(() => {
    API.getReviews(movieId).then(response => {
      if (response) {
        setReview(response.data.results);
        if(response.data.results.length===0){
          setNoData(true);}
      } else {
        return;
      }
    });
  }, [movieId]);

  return (
    <>
      {review ? (
        <ul>
          {review.map(rev => (
            <ReviewsItem
              key={rev.id}
              author={rev.author}
              content={rev.content}
            />
          ))}
        </ul>
      ) : (
        <Spinner />
      )}
      {(noData) && (
        <ReviewText>Sorry, we don't have any reviews for this movie</ReviewText>
      )}
    </>
  );
};

ReviewsItem.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};

export default Reviews;
