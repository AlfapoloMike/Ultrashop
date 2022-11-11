import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ModalContainerStyled = styled(motion.div)`
  position: absolute;
  background:#848494;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
  width: 450px;
  top: 100px;
  right: 0;
  z-index: 98;
  border-radius: 1rem 0 0 1rem;
  padding: 2rem;
  color:#0f1027;

  & span {
    display: flex;
    margin-top: 10px;
    cursor: pointer;
    
    &:hover {
      opacity: 90%;
      color:white;
    }
  }
`;

export const LinkStyled = styled(Link)`

text-decoration: none;

h3{
  margin:0;
  color:#0f1027;
}
h3:hover{

    color:white;

  }


`;

export const UsernameStyled = styled.h2`
  font-weight: 400;
`;

export const HrStyled = styled.hr`
  margin: 2rem 0;
`;
