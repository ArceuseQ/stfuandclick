import styledComponents from 'styled-components';
import { renderCellStyle } from './TableCell';

const baseStyle = `
  height: 24px;
  line-height: 24px;
  font-weight: bold;
  padding: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default styledComponents.td`
    ${props => renderCellStyle(baseStyle, props.column)}
`;
