import { FiSearch } from 'react-icons/fi';
import { Container } from '../styles/components/Input/styles';

type InputProps = {
  hasIcon?: boolean;
  placeholder?: string;
};

export function Input({ hasIcon = false, placeholder }: InputProps) {
  return (
    <Container>
      {hasIcon && <FiSearch />}
      <input type="text" placeholder={placeholder} />
    </Container>
  );
}
