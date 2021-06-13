import styled from 'styled-components';
import { colors, fontSizes } from '../../global.styles';

import DosFont from '../../fonts/PerfectDos.ttf';

export const ErrorPageContainer = styled.div`
  @font-face {
    font-family: 'DosFont';
    src: url(${DosFont}) format('truetype');
  }

  height: 100vh;
  background: #000084;
  color: ${colors.whiteColor};
  font-family: 'DosFont';
  font-size: ${fontSizes.medium};

  .home {
    display: flex;
    justify-content: flex-start;
    padding: 5vmin;
  }

  .error {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;

    .demo-version {
      color: ${colors.linkColor};
      cursor: pointer;
    }
  }
`;
