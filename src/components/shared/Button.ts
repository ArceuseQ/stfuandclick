import styledComponents from 'styled-components';
import { lighten } from 'polished';

export default styledComponents.button`
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.inverted};
  background: ${({ theme }) => theme.color.primary};
  font-size: 21px;
  border-radius: 8px;
  border: none;
  padding: 14px 21px;
  transition: all 0.1s ease-in;
  touch-action: manipulation;

  &:focus {
    outline: 0;
  }

  &:active {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    transform: scale(0.95);
    background: ${({ theme }) => lighten(0.1, theme.color.primary)};
  }
`;
