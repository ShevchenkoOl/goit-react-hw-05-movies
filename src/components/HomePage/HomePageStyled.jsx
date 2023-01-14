import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HotFilmLink = styled(NavLink)`
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

export const HotFilmItem = styled.li`
  list-style: none;
`;

export const HomePageTitle = styled.h2`
  font-weight: 700;
  font-size: ${props => props.theme.spacing(5)};
  line-height: 1.2;
  color: ${props => props.theme.colors.titleColor};
`;
