import styled from "styled-components";


export const CardTypeContainerStyled = styled.div`

display:flex;
flex-direction:row;
background-color: ${({ selected }) =>
selected ? '#848494' : 'brown'};
width:15rem;
height:6rem;
justify-content:center;
align-items: center;
border-width: 5px;
border-style: solid;
border-color: #dedede;
border-radius: 40px 40px 40px 40px;
overflow:hidden;
color:${({ selected }) =>
selected ? '#0f1027' : 'white'};;
margin:1rem;

:hover{
    background:#0f1027;
    color:white;
}


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