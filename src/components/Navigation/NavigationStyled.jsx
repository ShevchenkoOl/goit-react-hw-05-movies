import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationContainer = styled.nav`
  padding: ${props => props.theme.spacing(3)};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  margin-bottom: ${props => props.theme.spacing(3)};
`;

//Стилизованные линки на панели навигации
export const NavigationLink = styled(NavLink)` 
  font-size: ${props => props.theme.spacing(6)};
  font-weight: 600;
  text-decoration: none;
  padding: ${props => props.theme.spacing(2)};
  :hover,
  :focus {
    color: ${props => props.theme.colors.focusColor};
  }
  &.active {
    color: ${props => props.theme.colors.activeColor};
  }
`;
