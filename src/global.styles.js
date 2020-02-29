import { createGlobalStyle } from 'styled-components';

export const colors = {
  backgroundDark: '#011A27',
  backgroundLightDark: '#063852',
  textColor: '#F0810F',
  whiteColor: '#ffffff',
  secondaryColor: '#E6DF44',
};

const GlobalStyle = createGlobalStyle`
    body{
        text-align: center;
        background: ${colors.backgroundDark};
        
        #root{
            min-height: 100vh;
        }
    }
`;

export default GlobalStyle;
