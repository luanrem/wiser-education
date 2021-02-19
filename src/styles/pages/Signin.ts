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

  .layer {
    background: linear-gradient(0deg, #130525 50%, rgba(105, 57, 153, 0) 100%);
    opacity: 0.5;
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 600px;

  .fixedContent {
    width: 256px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  h1 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 48px;

    color: #383e71;

    width: 231px;
    padding-bottom: 16px;
  }

  h3 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #989fdb;

    width: 222px;
    padding-bottom: 13px;
  }

  h4 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;

    align-self: center;
    text-align: center;
    padding-top: 32px;

    color: #989fdb;
  }

  Form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    flex-wrap: nowrap;
  }

  span {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 48px;

    height: 30px;
    padding: 0 0 8px 8px;
  }
`;
