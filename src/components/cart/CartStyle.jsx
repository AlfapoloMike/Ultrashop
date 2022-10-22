import { motion } from "framer-motion";
import { IoCartOutline } from "react-icons/io5";
import styled from "styled-components";

export const CardContainerStyled = styled.div`

display:flex;
flex-direction:row;
flex-wrap:wrap;
width:24rem;
justify-content:left;
background:#848494;
border: 5px double #0f1027;

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

export const CartContainerStyled = styled.div`
    max-height:60rem;
    overflow:scroll;
    overflow-x: hidden;
    width:fit-content;
`
export const ButtonsCartContainerStyled = styled.div`

button{
    border-style:solid;
    border-color:white;
    padding:0.5rem;
    background:#0f1027;
    font-size:1.5rem;
    background:#dedede;
    color:#0f1027;
}
button:disabled{
    opacity:0.6; 
    
}

button:hover{
    background:#0f1027;
    color:white;
}

`

export const EmptyCartButtonStyled = styled.button`
    font-size: 1.5rem;

`
export const EndShopCartButtonStyled = styled.button`
    font-size: 1.5rem;

`

export const InfoCartContainer = styled.div`

width:25rem;
text-align:center;
background:#848494;
border: 5px double #0f1027;
padding:1rem;

`


export const CartIconStyled = styled(IoCartOutline)`
width:3rem;
height:auto;
background:brown;
margin:1rem;

`
export const CartIconContainerStyled = styled.div`

display:flex;
justify-content:center;

`

export const FullCartContainer = styled.div`

// display:flex;
// flex-direction:column;
// justify-content: right;
margin-left:30vw;

`