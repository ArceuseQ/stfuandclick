import styledComponents from 'styled-components';

export default styledComponents.main`
  margin: 32px auto;
  background: #fff;
  width: 100%;
  border-radius: 12px;
  border: 3px solid ${({theme}) => theme.color.primary};
  padding: 16px 0;
`;
