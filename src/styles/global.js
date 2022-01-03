import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}

html {
    scroll-behavior: smooth;

    a{
        text-decoration: none;
    }
  }

body {
    font-size: 14px;
}
`