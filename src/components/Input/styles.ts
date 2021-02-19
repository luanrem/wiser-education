import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: transparent;
  border-radius: 8px;
  padding: 17px;
  width: 256px;

  border: 1px solid #989fdb;
  color: #666360;
  transition: border 0.2s;
  transition: color 0.2s;

  display: flex;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: #ff377f;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #9d25b0;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #9d25b0;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #383e71;
    outline: none;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 5px;
  }
`;

export const Error = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 48px;

  height: 20px;
  padding-left: 25px;

  color: #ff377f;
`;
