import * as React from 'react';
import styledComponents from 'styled-components';

const Error: React.SFC<any> = props => (
  <ErrorWrapper>{props.children}</ErrorWrapper>
);

export default Error;

const ErrorWrapper = styledComponents.div`
  width: 75%;
  padding: 12px 16px;
  margin: 16px auto;
  background: red;
  color: ${({ theme }) => theme.color.text.inverted};
  text-align: center;
  font-size: 14px;
`;
