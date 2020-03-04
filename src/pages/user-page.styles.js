import styled from 'styled-components';
import { colors, fontSizes } from '../global.styles';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3vmin;

  .home {
    text-transform: uppercase;
    font-size: ${fontSizes.medium};
  }
`;
