import { InputHTMLAttributes } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Container } from '../styles/components/Input/styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasIcon?: boolean;
}

export function Input({ hasIcon = false, ...rest }: InputProps) {
  return (
    <Container>
      {hasIcon && <FiSearch />}
      <input type="text" {...rest} />
    </Container>
  );
}
