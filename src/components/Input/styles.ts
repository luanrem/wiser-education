import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

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
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
