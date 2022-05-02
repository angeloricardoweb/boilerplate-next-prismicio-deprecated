import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

  //variables

  :root {
    --color-blue: #2CBFC7;
    --color-pink: #CF3290;
    --color-carmin: #610631;
    --color-beige: #FFF0C9;
    --color-white: #FFFFFF;
    --color-black: #3A3A3A;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *{
    font-family: 'Raleway', sans-serif;
  }

  p{
    font-size: 1.6rem;
    color: var(--color-black);
  }
 
`;
