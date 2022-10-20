import { createGlobalStyle } from "styled-components";
import background from '../assets/images/ui/background.svg'
import  Philosoper from '../assets/fonts/Philosopher/Philosopher-Bold.ttf'
import  PhilosoperRegular from '../assets/fonts/Philosopher/Philosopher-Regular.ttf'
import Pixellari from '../assets/fonts/Pixellari/Pixellari.ttf'

export const GlobalStyle = createGlobalStyle `

*{
    box-sizing:border-box;
    font-family: "Pixellari-regular";
}

html{
    scroll-behavior: smooth;
}

body {
    margin: 0;
    padding: 0;
    background-image: url(${background});
    background-repeat: repeat-y;
    background-size:100%;
    font-family: 'Montserrat', sans-serif;
    color: white;
    overflow-x: hidden
    }

@font-face {
            font-family: "Pixellari-regular";
            src: local("Pixellari-regular"),
            url("${Pixellari}") format("truetype");
            font-weight: bold;
        }


`