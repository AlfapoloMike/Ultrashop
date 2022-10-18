import styled from "styled-components";



export const CardLevelContainerStyled = styled.div`

display:flex;
flex-direction:row;
background-color: ${({ selected }) =>
selected ? 'grey' : 'brown'};
width:20rem;
height:8rem;
justify-content:center;
align-items: center;
border-radius:3rem;
overflow:hidden;
margin:1rem;

&& img{
    width:auto;
    height:8rem;
}


`

export const LevelCardsContainerStyled = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    width:60rem;
    margin:auto;
`