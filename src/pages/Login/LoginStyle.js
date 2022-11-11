import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-top:10rem;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 20px;
`;

export const LoginPasswordStyled = styled.p`
  margin: 0;
  font-size:1.4rem;
  color:white;

  :hover {
    text-decoration: underline;
    color:#dedede;

  }
`;

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

export const LoginEmailStyled = styled.p`
  color: brown;
  font-size:1.4rem;

  :hover {
    text-decoration: underline;
    transition: all 0.25s ease-out;
  }
`;
