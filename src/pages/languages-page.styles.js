import styled from 'styled-components';
import { colors, fontSizes, breakpoint } from '../global.styles';

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

  @media only screen and (max-width: ${breakpoint}) {
    flex-direction: column;
    padding-right: 0;
    height: 60vh;
  }
`;
