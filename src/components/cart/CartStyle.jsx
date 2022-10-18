import styled from "styled-components";

export const CardContainerStyled = styled.div`

display:flex;
flex-direction:row;
flex-wrap:wrap;
width:30rem;
justify-content:center;
background:grey;

`

export const CardTextContainer = styled.div`

display:flex;
flex-direction:column;
margin-top:auto;
margin-bottom:auto;
padding:0.5rem;

&& h2{
    margin:0;
}

`

export const CardImage = styled.img`

width:8rem;
margin:1rem;
`