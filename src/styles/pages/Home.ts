import styled from 'styled-components';
import { shade } from 'polished';

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

export const Button = styled.div`
  background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
  box-shadow: 0px 10px 25px #cf99db;
  height: 48px;
  border-radius: 8px;
  border: none;
  color: #fff;
  width: 200px;
  margin-top: 24px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  position: absolute;
  left: 100px;
  top: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    background: ${shade(0.2, '#9d25b0')};
  }
`;
