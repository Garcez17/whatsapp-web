import { format } from 'date-fns';
import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { Message as MessageType } from '../../store/modules/chat/types';
import { State } from '../../store/modules/rootReducer';
import { User } from '../../store/modules/user/types';
import { CheckIcon } from '../../styles/components/aside/chat/styles';

import {
  Container,
  MsgWrapper,
} from '../../styles/components/content/Message/styles';
import { Group } from '../../store/modules/groups/types';

type MessageProps = {
  content: MessageType;
};

function MessageComponent({ content }: MessageProps) {
  const user = useSelector<State, User>(state => state.user.user);

  const currentGroup = useSelector<State, Group>(
    state => state.groups.currentGroup,
  );
  const sender = (
    content.to._id ? content.to._id : (content.to as unknown)
  ) as string;

  const hour = useMemo(() => {
    return format(new Date(content.created_at), 'HH:mm');
  }, [content.created_at]);

  return (
    <Container userMessage={user._id === sender}>
      {user._id !== sender && currentGroup?._id && (
        <Image
          src={content?.to?.avatar}
          alt={content?.to?.name}
          width={48}
          height={32}
        />
      )}
      <MsgWrapper userMessage={user._id === sender}>
        {user._id !== sender && currentGroup?._id && (
          <span>{content?.to?.name}</span>
        )}
        <p>
          {content.text}{' '}
          <span>
            {hour} {user._id === sender && <CheckIcon isRead={content.read} />}
          </span>
        </p>
      </MsgWrapper>
    </Container>
  );
}

export const Message = memo(MessageComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.content, nextProps.content);
});
