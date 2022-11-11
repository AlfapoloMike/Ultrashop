import { IoCartOutline } from "react-icons/io5";
import { RiUserFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavBarContainerStyled = styled.div`

display:flex;
flex-direction:row;
position:absolute;
justify-content:right;
width: 100vw;
text-aling:center;
height:5rem;
background:brown;

a{
margin:1rem;
align-self:center;
color:white;
font-size:1.5rem;
}
a:hover{
    cursor:pointer;
}

`

export const LinkStyled = styled(Link)`

margin:1rem;
align-self:center;
color:white;
font-size:1.5rem;
text-decoration: none;
`

export const IconCart = styled(IoCartOutline)`

width:3rem;
height:auto;

`

export const IconProfile = styled(RiUserFill)`

width:2rem;
height:auto;
margin:0 2rem 0 2rem;
`