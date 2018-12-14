import * as React from 'react';
import styledComponents from 'styled-components';
import { darken } from 'polished';
import RibbonContent from './RibbonContent';
import NonSemanticProtector from '../NonSemanticProtector';

interface RibbonProps {
  element: JSX.Element;
  text: string;
}

const Ribbon: React.SFC<RibbonProps> = props => (
  <NonSemanticProtector>
    <RibbonWrapper>
      <RibbonContent element={props.element}>{props.text}</RibbonContent>
    </RibbonWrapper>
  </NonSemanticProtector>
);

export default Ribbon;

const RibbonWrapper = styledComponents.div`
  position: relative;
  width: 50%;
  max-width: 150px;
  padding: 1em 2em;
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.text.inverted};
  text-align: center;
  margin: 6em auto 3em;

  &::before, &::after {
    content: '';
    position: absolute;
    display: block;
    bottom: -1em;
    border: 1.5em solid ${({ theme }) => darken(0.1, theme.color.primary)};
    z-index: -1;
  }

  &::before {
    left: -2em;
    border-right-width: 1.5em;
    border-left-color: transparent;
  }

  &::after {
    right: -2em;
    border-left-width: 1.5em;
    border-right-color: transparent;
  }
`;
