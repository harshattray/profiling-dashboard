/**
 * @Author: harsha
 * @Date:   2020-08-12T21:59:31+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-08-17T14:20:28+02:00
 */
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing : border-box;
}
body{
  font-family: sans-serif;
  @media only screen and (max-width: 68.75em) {
        font-size: 80%;
    }
  &  a{
  text-decoration: none; /* no underline */
    }
}
`;

export default GlobalStyle;
