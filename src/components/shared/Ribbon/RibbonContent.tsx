import * as React from 'react';
import { darken } from 'polished';
import styledComponents from 'styled-components';

interface RibbonContentProps {
  element: JSX.Element;
}

const RibbonContent: React.SFC<RibbonContentProps> = props => {
  const RibbonContentElement = styledComponents(props.element.type)`
    ${RibbonContentStyles};

    &::after, &::before {
      border-color:
        ${({ theme }) => darken(0.25, theme.color.primary)}
        transparent
        transparent
        transparent;
    }
  `;

  return <RibbonContentElement>{props.children}</RibbonContentElement>;
};

export default RibbonContent;

const RibbonContentStyles = `
  font-size: 16px;
  margin: 0;

  &::before, &::after {
    content: '';
    position: absolute;
    display: block;
    border-style: solid;
    bottom: -1em;
  }

  &::before {
    left: 0;
    border-width: 1em 0 0 1em;

  }

  &::after {
    right: 0;
    border-width: 1em 1em 0 0;
  }
`;
