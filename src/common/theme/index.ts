import { createGlobalStyle } from "styled-components";
import libertad from "../assets/fonts/Libertad/Libertad.woff";
import libertadwf2 from "../assets/fonts/Libertad/Libertad.woff2";

export const theme = {

}

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'Libertad';
      src: url(${libertadwf2}) format('woff2'),
      url(${libertad}) format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    
    html {
      font-size: 16px;
    }
`

export default GlobalStyle;