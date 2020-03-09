import { createGlobalStyle } from 'styled-components';

export const colors = {
  backgroundDark: '#011A27',
  backgroundLightDark: '#063852',
  textColor: '#F0810F',
  whiteColor: '#ffffff',
  secondaryColor: '#E6DF44',
  linkColor: '#b884e3',
};

export const fontSizes = {
  large: '10vmin',
  medium: '5vmin',
  small: '3vmin',
  xs: '1vmin',
};

export const breakpoint = '800px';

const GlobalStyle = createGlobalStyle`
    body{
        text-align: center;
        background: ${colors.backgroundDark};

        a {
          text-decoration: none;
          color: ${colors.linkColor};
        }
        
        #root{
            min-height: 100vh;
        }
    }
`;

export default GlobalStyle;
