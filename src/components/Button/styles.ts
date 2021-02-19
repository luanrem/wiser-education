import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
  box-shadow: 0px 10px 25px #cf99db;
  height: 48px;
  border-radius: 8px;
  border: none;
  color: #fff;
  width: 100%;
  margin-top: 24px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  &:active {
    background: ${shade(0.2, '#9d25b0')};
  }
`;
