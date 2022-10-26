import styled from "styled-components";


export const CardContainer = styled.div`

display:flex;
width:20vw;
min-width:28rem;
margin:1rem;
justify-content:center;
// align-items:center;
height:15rem;

img{
    border-radius:20px 0 0px 20px;
    height:100%;
    background-color:#dedede;
}

`


// container cards

export const RecomendContainer = styled.div`

padding-top:10rem;
display:flex;
flex-wrap:wrap;
flex-direction:row;
justify-content:center;
width:80vw;
margin-left:auto;
margin-right:auto;

h2{
    width:100%;
    text-align:center;
    font-size:4rem;
    background:brown;
}

`

export const RecomendTextContainer = styled.div`

width:100%;
border-width: 5px;
border-style: solid;
border-color: #dedede;
border-radius: 0px 20px 20px 0px;
padding:0.5rem;
// height:70%;
background:#848494;
color:#0f1027;
font-size:1.4rem;

h3{
    margin:0.8vw 0 0.8vw 0;
}

`

export const ButtonRecomendStyle = styled.div`

button{
    border-style:solid;
    border-color:white;
    padding:0.3rem;
    background:#0f1027;
    font-size:1vw;
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
