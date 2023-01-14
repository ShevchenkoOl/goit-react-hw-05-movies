import { ReviewText, ReviewTitle, ReviewItem } from './ReviewsStyled';

export const ReviewsItem = ({ author, content }) => {
  return (
    <ReviewItem>
      <ReviewTitle>{author}</ReviewTitle>
      <ReviewText>{content}</ReviewText>
    </ReviewItem>
  );
};
