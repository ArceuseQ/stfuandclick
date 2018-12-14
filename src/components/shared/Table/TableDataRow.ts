import styledComponents from 'styled-components';

const renderStyle = (isActive, activeColor) => {
  if (isActive) {
    return `
      background: ${activeColor};
      color: white;
      font-size: 21px;

      td {
          line-height: 48px;
      }
    `;
  }

  return `
    &:nth-child(odd) {
        background: #dbe9fa;
    }
    &:nth-child(even) {
        background: #ecf3fc;
    }
  `;
};

export default styledComponents.tr`
    ${props => renderStyle(props.active, props.theme.color.primary)}
`;
