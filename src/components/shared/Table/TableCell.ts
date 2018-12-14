export const renderCellStyle = (baseStyle: string, column: string) => {
  switch (column) {
    case 'team':
      return `
        ${baseStyle}
        text-align: left;
        width: 50%;
      `;
    case 'order':
      return `
        ${baseStyle}
        width: 20%;
        text-align: right;
      `;
    case 'clicks':
      return `
        ${baseStyle}
        text-align: right;
      `;
    default:
      return baseStyle;
  }
};
