/* eslint-disable react-hooks/exhaustive-deps */
import { RiInboxArchiveLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { User, UserState } from '../../store/modules/user/types';
import { addContact } from '../../store/modules/contacts/actions';

import { State } from '../../store/modules/rootReducer';
import { Chat } from './Chat';

import { socket } from '../../service/api';

import {
  ArchivedContainer,
  ArchivedContent,
  Container,
  IconContainer,
} from '../../styles/components/aside/chats/styles';
import { Contact } from '../../store/modules/contacts/types';

export function Chats() {
  const dispatch = useDispatch();

  const { user } = useSelector<State, UserState>(state => state.user);
  const contacts = useSelector<State, Contact[]>(
    state => state.contacts.contacts,
  );
  const currentContact = useSelector<State, User>(
    state => state.contacts.currentContact,
  );

  useEffect(() => {
    socket.on('new_users', data => {
      if (user.id !== data.id) {
        dispatch(addContact(data));
      }
    });

    socket.emit('get_users', (users: User[]) => {
      const filteredUsers = users.filter(usr => usr.id !== user.id);

      filteredUsers.forEach(usr => {
        dispatch(addContact(usr));
      });
    });
  }, [socket, currentContact]);

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
      {contacts.map(usr => (
        <Chat key={usr.id} user={usr} />
      ))}
    </Container>
  );
}
