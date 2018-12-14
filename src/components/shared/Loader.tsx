import * as React from 'react';
import styledComponents from 'styled-components';
import theme from 'src/theme';

export default () => (
  <LoaderWrapper>
    <div />
    <div />
    <div />
    <div />
  </LoaderWrapper>
);

const LoaderWrapper = styledComponents.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 51px;
    height: 51px;
    margin: 6px;
    border: 6px solid ${({ theme }) => theme.color.primary};
    border-radius: 50%;
    animation: loading 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color:
      ${({ theme }) => theme.color.primary} transparent transparent transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;