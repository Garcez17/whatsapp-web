import { FiChevronRight } from 'react-icons/fi';
import { FaBellSlash } from 'react-icons/fa';
import {
  Container,
  ContainerBell,
  ContainerInfoNotification,
  SubTitleNotification,
} from '../../styles/components/aside/notification/styles';

export function Notification() {
  return (
    <Container>
      <ContainerBell>
        <FaBellSlash />
      </ContainerBell>

      <ContainerInfoNotification>
        <span>Get notified of new messages</span>
        <SubTitleNotification>
          <p>Turn on desktop notifications</p>
          <FiChevronRight />
        </SubTitleNotification>
      </ContainerInfoNotification>
    </Container>
  );
}
