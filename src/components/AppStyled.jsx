import styled from '@emotion/styled';
import { SpinnerRoundFilled } from 'spinners-react';

//Контейнер для контента на сайте
export const Container = styled.div`
  padding: ${props => props.theme.spacing(6)};
`;

export const Spinner = styled(SpinnerRoundFilled)`
  margin: 0 auto;
`;