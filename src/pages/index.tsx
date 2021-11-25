import { Aside } from '../components/Aside';
import { Content } from '../components/Content';

import { Container } from '../styles/pages/Home/styles';

export default function Home() {
  return (
    <Container>
      <Aside />
      <Content />
    </Container>
  );
}
