import styled from "styled-components";


export const CardTypeContainerStyled = styled.div`

display:flex;
flex-direction:row;
background-color: ${({ selected }) =>
selected ? 'grey' : 'brown'};
width:15rem;
height:6rem;
justify-content:center;
align-items: center;
border-radius:3rem;
overflow:hidden;
margin:1rem;

&& img{
    width:auto;
    height:5rem;
}


`

export const TypeCardsContainerStyled = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    width:60rem;
    margin:auto;
`