import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MoviePageText = styled.p`
  font-family: Raleway, sans-serif;
  font-weight: 500;
  font-size: ${props => props.theme.spacing(3)};
  line-height: 1.2;
  color: ${props => props.theme.colors.textColor};
  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const MoviePageTitle = styled.h3`
  font-family: Raleway, sans-serif;
  font-weight: 700;
  font-size: ${props => props.theme.spacing(4)};
  line-height: 1.2;
  color: ${props => props.theme.colors.titleColor};
  margin-bottom: ${props => props.theme.spacing(1)};
`;

export const Poster = styled.img`
  width: ${props => props.theme.spacing(64)};
`;

export const GenresItem = styled.span`
  :not(:last-child) {
    padding-right: ${props => props.theme.spacing(2)};
  }
`;

export const MoviePageContent = styled.div`
  display: flex;
  margin-bottom: ${props => props.theme.spacing(3)};
`;

export const MoviePageDescription = styled.div`
  padding: ${props => props.theme.spacing(4)};
`;

export const DetailsLink = styled(NavLink)`
  display: block;
  font-family: Raleway, sans-serif;
  font-weight: 500;
  font-size: ${props => props.theme.spacing(4)};
  line-height: 1.2;
  text-decoration: none;
  color: ${props => props.theme.colors.textColor};
  :hover,
  :focus {
    color: ${props => props.theme.colors.focusColor};
  }
`;
