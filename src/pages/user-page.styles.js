import styled from 'styled-components';
import { fontSizes, colors } from '../global.styles';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2vmin 0 2vmin 15vmin;

  .home {
    text-transform: uppercase;
    font-size: ${fontSizes.medium};
    color: ${colors.linkColor};
    cursor: pointer;
  }
`;
