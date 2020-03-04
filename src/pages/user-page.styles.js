import styled from 'styled-components';
import { fontSizes } from '../global.styles';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3vmin 0 3vmin 15vmin;

  .home {
    text-transform: uppercase;
    font-size: ${fontSizes.medium};
  }
`;
