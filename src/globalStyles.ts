import { createGlobalStyle } from 'styled-components'

import GilroyMediumEot from './fonts/Gilroy-Medium.eot'
import GilroyMediumTtf from './fonts/Gilroy-Medium.ttf'
import GilroyMediumWoff from './fonts/Gilroy-Medium.woff'

import GilroyExtraboldEot from './fonts/Gilroy-Extrabold.eot'
import GilroyExtraboldTtf from './fonts/Gilroy-Extrabold.ttf'
import GilroyExtraboldWoff from './fonts/Gilroy-Extrabold.woff'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroyMediumEot});
    src: local('Gilroy'), url(${GilroyMediumWoff}) format('woff'), url(${GilroyMediumTtf}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroyExtraboldEot});
    src: local('Gilroy'), url(${GilroyExtraboldWoff}) format('woff'), url(${GilroyExtraboldTtf}) format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  body {
    font-family: "Gilroy";
    font-size: 14px;
    font-weight: 400;
  }

  button, input, textarea {
    font-family: "Gilroy";
  }

  * {
    margin: 0px;
    padding: 0px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  div {
    box-sizing: border-box;
  }

`
export default GlobalStyles
