import styled from '@emotion/styled';

//Стилизованный текст отзыва
export const ReviewText = styled.p`
  font-family: Raleway, sans-serif;
  font-weight: 500;
  font-size: ${props => props.theme.spacing(3)};
  line-height: 1.2;
  color: ${props => props.theme.colors.textColor};
`;

export const ReviewTitle = styled.h2`
  font-family: Raleway, sans-serif;
  font-weight: 700;
  font-size: ${props => props.theme.spacing(5)};
  line-height: 1.2;
  color: ${props => props.theme.colors.titleColor};
`;

//Стили блока для отдельного отзыва
export const ReviewItem = styled.li`
  list-style: none;
  text-indent: ${props => props.theme.spacing(3)};
  padding: ${props => props.theme.spacing(2)};
  border-radius: ${props => props.theme.spacing(1)};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  :not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(2)};
  }
`;
