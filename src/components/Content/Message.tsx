import { format } from 'date-fns';
import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Message as MessageType } from '../../store/modules/chat/types';
import { State } from '../../store/modules/rootReducer';
import { User } from '../../store/modules/user/types';
import { CheckIcon } from '../../styles/components/aside/chat/styles';

import { Container } from '../../styles/components/content/Message/styles';

type MessageProps = {
  content: MessageType;
};

function MessageComponent({ content }: MessageProps) {
  const user = useSelector<State, User>(state => state.user.user);

  const sender = (
    content.to._id ? content.to._id : (content.to as unknown)
  ) as string;

  const hour = useMemo(() => {
    return format(new Date(content.created_at), 'HH:mm');
  }, [content.created_at]);

  return (
    <Container userMessage={user._id === sender}>
      <p>
        {content.text}{' '}
        <span>
          {hour} {user._id === sender && <CheckIcon isRead={content.read} />}
        </span>
      </p>
    </Container>
  );
}

export const Message = memo(MessageComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.content, nextProps.content);
});
