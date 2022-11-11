import { motion } from "framer-motion";
import { IoTrashOutline, IoSendOutline, IoCloseCircleOutline } from "react-icons/io5";
import styled from "styled-components";

export const CardContainerStyled = styled.div`

display:flex;
flex-direction:row;
flex-wrap:wrap;
width:25vw;
justify-content:left;
background:#848494;
border-radius:20px;
margin:0.2rem;
margin-left:2vw;


:hover{
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

`
export const CardImage = styled.img`

width:8rem;
margin:1rem;
`

export const CardTextContainer = styled.div`

display:flex;
flex-direction:column;
margin-top:auto;
margin-bottom:auto;
padding:0.5rem;

&& h2{
    margin:0;
    color:#0f1027;
}

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

// cart style


export const CartContainerStyled = styled(motion.div)`
background:#848494;
overflow:hidden;
width:25vw;
height:100vh;
position:fixed;
right:0;
top:0;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
z-index:100;
`
export const UpperCartInfoContainer = styled.div`
    height:15%;    
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;

    h2{
        color:#0f1027;
        margin:0.1rem;
    }
`

export const CloseButtonStyled = styled(IoCloseCircleOutline)`
width:4rem;
height:auto;    
background:#848494;
color:#0f1027;
`

export const AllCardsContainer = styled.div`

    height:65%;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    // background:red;

    &::-webkit-scrollbar {
      display: none;
    }
`
export const EmptyCartMessage = styled.div`

height:65%;
width:25vw;
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;
img{
    width:15rem;
    margin-left:auto;
    margin-right:auto;
}
`


export const CartInfoContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:25vw;
    background:#848494;
    position:absolute;
    text-align:center;
    height:20%;
    *{
        margin:0;
        padding:0;
    }

    h2{
        font-size:2rem;
        padding:0.5rem;
        color:#0f1027;
    }

`

export const CartIconContainerStyled = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items: center;
    align-content:center;



`

export const TrashICon = styled(IoTrashOutline)`

    width:3rem;
    height:auto;
    
    :hover{
        color:#0f1027;
    }

`
export const EndShopCartButtonStyled = styled.button`
    font-size: 1.5rem;
    margin:1rem;
    padding:0.5rem;
    background:#dedede;
    color:#0f1027;

    :hover{
        background:#0f1027;
        color:white;
    }
    

`
export const ArrowIcon = styled(IoSendOutline)`

width:3rem;
height:auto;

:hover{
    color:#0f1027;
}

`
export const BlurBackground = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width:75vw;
  height: 100vh;

  ${({ hiddenMenu }) =>
  hiddenMenu &&
    `
      backdrop-filter: blur(4px);
    `}
`;