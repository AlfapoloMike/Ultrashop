import styled from "styled-components";

export const CardContainerStyled = styled.div`

width:fit-content;;
max-width:20rem;
background:grey;
display:flex;
flex-direction:column;
text-align:center;
margin:1rem;
border-radius:20px;

*{
    margin:0;
    padding:0;
}

img {
    width:20rem;
    margin:auto;
}
`;

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