import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ButtonSubmitStyled = styled(motion.button)`
  padding: 1rem;
  width:10rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color:#848494;
  color: white;
  font-size:1.2rem;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  margin-top: 15px;

  :hover{
    color:#0f1027;
    text-decoration: underline;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
