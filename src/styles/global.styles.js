import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
      min-height: 100vh;
      background: #1c1917;
      color: #fafaf9;
      font-family: "Nunito", sans-serif;
    }
    #root {  
      max-width: 800px;
      margin: 0 auto;
    }
    a:hover, button:hover {
      opacity: 0.8;
      cursor: pointer;
    }
    :disabled {
      opacity: 0.4 !important;
      cursor: auto !important;
    }
`;

export default GlobalStyles;
