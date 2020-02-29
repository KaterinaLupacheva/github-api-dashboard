import { createGlobalStyle } from 'styled-components';

export const colors = {
  background: '#282c34',
};

const GlobalStyle = createGlobalStyle`
    body{
        text-align: center;
        background: ${colors.background};
        min-height: 100vh;
    }
`;

export default GlobalStyle;
