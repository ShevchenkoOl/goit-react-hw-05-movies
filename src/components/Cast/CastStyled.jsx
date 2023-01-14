import styled from '@emotion/styled';

export const CastStyledItem = styled.li`
  width: ${props => props.theme.spacing(64)};
  list-style: none;
  padding: ${props => props.theme.spacing(2)};
  border-radius: ${props => props.theme.spacing(1)};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  :not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(2)};
  }
`;

export const CastText = styled.p`
  font-family: Raleway, sans-serif;
  font-weight: 500;
  font-size: ${props => props.theme.spacing(3)};
  line-height: 1.2;
  color: ${props => props.theme.colors.textColor};
`;

export const ActorsPhoto = styled.img`
  width: ${props => props.theme.spacing(32)};
`;

export const ActorsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
