import styled from 'styled-components';
import { colors, fontSizes } from '../../global.styles';

export const TableContainer = styled.table`
  border: 2px solid ${colors.secondaryColor};
  color: ${colors.whiteColor};
  font-size: ${fontSizes.small};
  width: 30vw;
  border-collapse: collapse;

  th {
    font-weight: 400;
    color: ${colors.textColor};
    border: 1px solid ${colors.secondaryColor};
  }

  td {
    border: 1px solid ${colors.secondaryColor};
  }
`;
