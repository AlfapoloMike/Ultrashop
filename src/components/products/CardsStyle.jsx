import styled from "styled-components";

export const CardContainerStyled = styled.div`

width:fit-content;;
max-width:20rem;
background:#848494;
display:flex;
flex-direction:column;
text-align:center;
margin:1rem;
border-radius:20px;


*{
    margin:0;
    padding:0;
    color:#0f1027;
    font-family: "Pixellari-regular";
    // font-weight:bolder;
}

img {
    width:20rem;
    margin:auto;
    background:#dedede;
    border-radius:20px 20px 0 0;
}
`;
export const DigimonCardTextContainer = styled.div`

border-width: 5px;
border-style: solid;
border-color: #dedede;
border-radius: 0px 0px 20px 20px;
padding:0.5rem;

button {
    width:4rem;
    font-size:1.5rem;
}

button:hover {
    color:white;
    button-color;
    background:#0f1027;
}

`

export const DigimonNameStyled = styled.h2 `
font-size:${(props)=>(props.nombre < 15 ? "1.5vw" : "1.3vw")} ;
`
export const DataContainerStyled = styled.p`
font-size:1.1rem;
font-weight:bolder;
`
export const PriceContainerStyled = styled.p`
font-size:2rem;
font-weight:bolder;
`

export const CardsContainerStyled = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
width: 100rem;
margin:auto;
justify-content:center;
`

export const ShowMoreLessButtonContainerStyled = styled.div`

display:flex;
justify-content:center;

button{
    border-style:solid;
    border-color:white;
    padding:1rem;
    color:white;
    background:#0f1027;
    font-size:1.5rem;
    margin:0.5rem;
    
}
button:disabled{
    opacity:0.6; 
    
}

button:hover{
    background:#dedede;
    color:#0f1027;
}

`