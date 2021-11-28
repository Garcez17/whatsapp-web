import { RiInboxArchiveLine } from 'react-icons/ri';

import { useEffect, useState } from 'react';
import { Chat } from './Chat';

import { socket } from '../../service/api';

import {
  ArchivedContainer,
  ArchivedContent,
  Container,
  IconContainer,
} from '../../styles/components/aside/chats/styles';
import { User } from '../../contexts/ChatContext';

export function Chats() {
  const [chats, setChats] = useState<User[]>([]);

  useEffect(() => {
    socket.on('new_users', data => {
      setChats(oldState => [...oldState, data]);
    });

    socket.emit('get_users', users => {
      setChats(users);
    });
  }, [socket]);

  return (
    <Container>
      <ArchivedContainer>
        <IconContainer>
          <RiInboxArchiveLine />
        </IconContainer>
        <ArchivedContent>
          <span>Archived</span>
        </ArchivedContent>
      </ArchivedContainer>
      {chats.map(user => (
        <Chat key={user.id} user={user} />
      ))}
    </Container>
  );
}
