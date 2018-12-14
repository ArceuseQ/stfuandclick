import * as React from 'react';
import { Link } from 'react-router-dom';
import styledComponents from 'styled-components';

export default () => (
  <Header>
    <h1>
      <Link to='/'>STFUANDCLICK.COM</Link>
    </h1>
  </Header>
);

const Header = styledComponents.header`
  background: ${({ theme }) => theme.color.primary};
  line-height: 48px;
  text-align: center;

  a {
    color: ${({ theme }) => theme.color.text.inverted};
    text-decoration: none;
  }
`;
