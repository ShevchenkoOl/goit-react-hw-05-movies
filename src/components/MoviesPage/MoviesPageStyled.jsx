import styled from '@emotion/styled';
import { Field } from 'formik';
import { NavLink } from 'react-router-dom';
import { CustomButton } from '../GoBackButton/GoBackButton';

export const SearchFormButton = styled(CustomButton)`
display: inline;
  margin-left: ${props => props.theme.spacing(1)};
`;

export const SearchFormInput = styled(Field)`
  width: 50%;
  font-size: ${props => props.theme.spacing(5)};
  outline: none;
  padding-left: ${props => props.theme.spacing(1)};
  padding-right: ${props => props.theme.spacing(1)};
  ::placeholder {
    font-size: ${props => props.theme.spacing(3.5)};
  }
`;

export const FilmList = styled.li`
  list-style: none;
  :not(:last-child) {
    ${props => props.theme.spacing(1)};
  }
`;

export const FilmLink = styled(NavLink)`
  font-family: Raleway, sans-serif;
  font-weight: 500;
  font-size: ${props => props.theme.spacing(3.5)};
  line-height: 1.2;
  color: ${props => props.theme.colors.textColor};
  text-decoration: none;
  :hover,
  :focus {
    color: ${props => props.theme.colors.focusColor};
  }
`;
