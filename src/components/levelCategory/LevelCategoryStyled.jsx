import styled from "styled-components";



export const CardLevelContainerStyled = styled.div`

display:flex;
flex-direction:row;
background-color: ${({ selected }) =>
selected ? '#848494' : 'brown'};
width:20rem;
height:8rem;
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