import Image from 'next/image';
import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { format } from 'date-fns';
import {
  loadMessagesFromChat,
  setRoomId,
} from '../../store/modules/chat/actions';
import {
  setCurrentContact,
  updateContactLastMessage,
  updateContactNotifications,
} from '../../store/modules/contacts/actions';
import { Contact } from '../../store/modules/contacts/types';
import { User } from '../../store/modules/user/types';

import { socket } from '../../service/api';

import {
  Container,
  ChatContent,
  MessageCounter,
  TimeAndMessages,
  TitleAndMessage,
  CheckIcon,
} from '../../styles/components/aside/chat/styles';
import { Group as GroupTypes } from '../../store/modules/groups/types';
import {
  setCurrentGroup,
  updateGroupLastMessage,
} from '../../store/modules/groups/actions';

type GroupProps = {
  group: GroupTypes;
};

export function Group({ group }: GroupProps) {
  const dispatch = useDispatch();
  function handleOpenChat() {
    dispatch(setCurrentGroup(group));
    dispatch(setCurrentContact(null));
    socket.emit('open_group', { roomId: group?.idChatRoom }, response => {
      const { messages } = response;

      dispatch(setRoomId(group?.idChatRoom));

      dispatch(loadMessagesFromChat(messages));
    });
  }

  useEffect(() => {
    socket.on('notification', data => {
      if (!data?.room?.isPrivate) {
        if (group._id === data.room._id) {
          // dispatch(updateContactNotifications(group, data.unreasdMessages));
          dispatch(updateGroupLastMessage(group._id, data.lastMessage));
        }
      }
    });
  }, [socket]);

  const hour = useMemo(() => {
    if (group.lastMessage) {
      return format(new Date(group.lastMessage.created_at), 'HH:mm');
    }

    return '';
  }, [group.lastMessage]);

  return (
    <Container onClick={handleOpenChat}>
      <ChatContent>
        <TitleAndMessage>
          <span>{group.name}</span>
          <div>
            {group?.lastMessage?.text && (
              <>
                {/* {String(group.lastMessage.to) !== group._id && (
                  <CheckIcon isRead={group.lastMessage.read} />
                )} */}

                <p>{group.lastMessage.text}</p>
              </>
            )}
          </div>
        </TitleAndMessage>
        <TimeAndMessages hasMessage={!!group.unreadMessages}>
          {group?.lastMessage?.text && <span>{hour}</span>}

          {group?.unreadMessages > 0 && (
            <MessageCounter>
              <span>{group.unreadMessages}</span>
            </MessageCounter>
          )}
        </TimeAndMessages>
      </ChatContent>
    </Container>
  );
}
