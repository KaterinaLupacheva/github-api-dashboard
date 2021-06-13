import styled from 'styled-components';
import { colors, fontSizes } from '../../global.styles';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${colors.whiteColor};
  width: 100%;
  height: 10vh;
  font-size: ${fontSizes.small};

  .developed {
    margin-left: 1vw;
  }

  .source {
    margin-right: 1vw;

    svg {
      margin-right: 0.5vw;
    }
  }
`;
