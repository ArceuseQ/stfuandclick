import * as React from 'react';
import styledComponents from 'styled-components';
interface BoxProps {
  title: string;
  titleElement: JSX.Element;
  text: string;
}

const Box: React.SFC<BoxProps> = props => (
  <BoxWrapper>
    {React.createElement(props.titleElement.type, {}, props.title)}
    <p>{props.text}</p>
  </BoxWrapper>
);

export default Box;

const BoxWrapper = styledComponents.div`
  width: 50%;
  float: left;
  margin: 24px 0;
  text-align: center;

  p {
    margin: 0;
    font-size: 32px;
    font-weight: 900;
    font-style: normal;
    color: ${({ theme }) => theme.color.primary};
  }

  *:not(p) {
    font-size: 16px;
    font-weight: 500;
    font-style: italic;
    margin: 0 0 6px;
  }
`;
