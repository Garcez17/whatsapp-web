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
import { useUser } from '../../hooks/useUser';
import { useChat } from '../../hooks/useChat';

export function Chats() {
  const { user } = useUser();
  const { loadUsers, chats, currentUserChat } = useChat();

  useEffect(() => {
    socket.on('new_users', data => {
      if (user.id !== data.id) {
        loadUsers([...chats, data]);
      }
    });

    socket.emit('get_users', (users: User[]) => {
      const filteredUsers = users.filter(usr => usr.id !== user.id);

      loadUsers(filteredUsers);
    });
  }, [socket, currentUserChat]);

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
      {chats.map(usr => (
        <Chat key={usr.id} user={usr} />
      ))}
    </Container>
  );
}
