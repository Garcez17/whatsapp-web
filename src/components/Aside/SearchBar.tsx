import { Container } from '../../styles/components/aside/searchbar/styles';
import { Input } from '../Input';

export function SearchBar() {
  return (
    <Container>
      <Input hasIcon placeholder="Search or start new chat" />
    </Container>
  );
}
