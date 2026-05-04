import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        font-family: "Familjen Grotesk", sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        border: none;
    }

    :root {
        --clr-dark-blue: #002366;
        --clr-light-blue: #739BE6;
        --clr-dark-text: #001133;
        --clr-light-text: #D4E0F7;
    }

    body{
        display: flex;
        justify-content: center;
        
        height: 100vh;
        padding-top: 60px;

        background: linear-gradient(120deg, #002366 10%, #003599 60%, #0046CC 89%);
    }
    
    p {
        color: var(--clr-light-text);
    }

    a {
        color: var(--clr-light-text);
    }
`

export default GlobalStyle