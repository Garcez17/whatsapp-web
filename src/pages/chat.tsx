import { Aside } from '../components/Aside';
import { Content } from '../components/Content';

import { Container } from '../styles/pages/Chat/styles';

export default function Chat() {
  return (
    <Container>
      <Aside />
      <Content />
    </Container>
  );
}
