import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  title: string;
  name: string;
}

const  Input: React.FC<InputProps> = ({ title, name, ...rest }) => {
  return(
    <Container>
        <label htmlFor={name}>{title}</label>
        <input id={name} {...rest} />
    </Container>
  )
}

export default Input;