import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  ul,
  li {
    list-style: none;
  }

  html,
  body {
    font-family: sans-serif;
    font-size: 16px;
  }
`;

export default GlobalStyle;
