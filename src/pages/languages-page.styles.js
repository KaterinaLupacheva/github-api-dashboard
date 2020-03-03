import styled from 'styled-components';
import { colors, fontSizes } from '../global.styles';

export const TotalLanguages = styled.div`
  padding: 5vh 0;
  color: ${colors.textColor};
  font-size: ${fontSizes.medium};
  font-weight: bold;
  text-transform: uppercase;
`;

export const DataRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-right: 10vw;
`;
