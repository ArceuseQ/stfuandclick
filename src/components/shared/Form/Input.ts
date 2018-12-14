import styledComponents from 'styled-components';

export default styledComponents.input`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 14px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  transition: border 0.4s ease-in-out;

  &:focus {
    border: 1px solid ${({ theme }) => theme.color.primary};
    outline: none;
  }

  &::placeholder {
    font-style: italic;
  }

  &:read-only {
    font-style: italic;
  }
`;
