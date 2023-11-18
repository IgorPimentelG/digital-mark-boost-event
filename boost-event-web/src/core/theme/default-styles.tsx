import { createGlobalStyle } from 'styled-components';

export const DefaultStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    min-height: 100vh;
  }
W
  a, button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  input {
    outline: none;
  }

  button {
    border: none;
    background-color: transparent;
  }
`;