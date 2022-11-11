import styled from "styled-components";



export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginInputStyled = styled.input`
  width: 23rem;
  padding: 1.5rem 2rem;
  color: red;
  background-color:#848494;
  border-radius: 15px;
  border: ${({ isError }) => (isError ? '1px solid #fb103d ' : 'none')};
  outline: none;
  caret-color: red;
  font-size:1.3rem;
  -webkit-text-fill-color:#0f1027;

  }
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 1.2rem;
`;
