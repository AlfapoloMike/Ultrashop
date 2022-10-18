import { createGlobalStyle } from "styled-components";
import background from '../assets/images/ui/background.svg'
export const GlobalStyle = createGlobalStyle `

html{
    scroll-behavior: smooth;
}

body {
    margin: 0;
    padding: 0;
    background-image: url(${background});
    font-family: 'Montserrat', sans-serif;
    color: white;
    overflow-x: hidden
    }

`