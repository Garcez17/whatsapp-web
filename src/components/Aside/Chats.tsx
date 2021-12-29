/* eslint-disable react-hooks/exhaustive-deps */
import { RiInboxArchiveLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { User, UserState } from '../../store/modules/user/types';
import {
  addContact,
  updateContactLastMessage,
  updateContactNotifications,
} from '../../store/modules/contacts/actions';

import { State } from '../../store/modules/rootReducer';
import { Chat } from './Chat';

import { socket } from '../../service/api';

import {
  ArchivedContainer,
  ArchivedContent,
  Container,
  IconContainer,
} from '../../styles/components/aside/chats/styles';
import { ChatContactData, Contact } from '../../store/modules/contacts/types';

export function Chats() {
  const dispatch = useDispatch();

  const user = useSelector<State, User>(state => state.user.user);
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

    socket.emit('get_users', user._id, (dataContact: ChatContactData[]) => {
      dataContact.forEach(data => {
        const { contact, lastMessage, unreadMessages } = data;

        dispatch(addContact(contact));
        dispatch(updateContactNotifications(contact, unreadMessages));
        dispatch(updateContactLastMessage(contact, lastMessage));
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
