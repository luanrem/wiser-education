import styled from 'styled-components';

import BackgroundImg from '../../assets/background.png';

export const Container = styled.div`
  color: #8257e5;
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${BackgroundImg}) no-repeat center;
  background-size: cover;
`;
