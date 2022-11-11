import styled from "styled-components";
import { Form as FormFormik } from "formik";
import { Link } from "react-router-dom";

export const RegisterInput = styled.input`


b
`

export const Form = styled(FormFormik)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 20px;
  padding-top:10rem;
`

export const LoginButtonGoogleStyled = styled.button`
width:10rem;
font-size:1.3rem;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
padding: 1rem 1.5rem;
outline: none;
border: none;
border-radius: 1rem;
background-color:#848494;
color: white;
cursor: pointer;

:hover{
  background-color:#dedede;
  color:#0f1027;
}
`;

export const LoginEmailStyled = styled(Link)`
  text-decoration: none;

  & p {
    color:#dedede;
    font-size:1.4rem;

    :hover {
      text-decoration: underline;
    }
  }
`;