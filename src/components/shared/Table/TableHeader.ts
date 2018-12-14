import styledComponents from 'styled-components';
import { renderCellStyle } from './TableCell';

const baseStyle = `
  padding: 6px 12px
  font-size: 12px;
  font-weight: bolder;
  color: rgba(0, 0, 0, 0.38);
  text-transform: uppercase;
`;

export default styledComponents.th`
    ${props => renderCellStyle(baseStyle, props.column)}
`;
