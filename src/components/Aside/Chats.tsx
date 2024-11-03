/* eslint-disable react-hooks/exhaustive-deps */
import { RiInboxArchiveLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { User } from '../../store/modules/user/types';
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
import { Group } from '../../store/modules/groups/types';
import {
  addGroup,
  updateGroupLastMessage,
} from '../../store/modules/groups/actions';
import { Group as GroupComponent } from './Group';

export function Chats() {
  const dispatch = useDispatch();

  const user = useSelector<State, User>(state => state.user.user);
  const contacts = useSelector<State, Contact[]>(
    state => state.contacts.contacts,
  );
  const groups = useSelector<State, Group[]>(state => state.groups.groups);
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
        dispatch(updateContactLastMessage(contact._id, lastMessage));
      });
    });
    socket.emit('get_groups', user._id, (dataGroups: any[]) => {
      dataGroups.forEach(data => {
        const { group, lastMessage, unreadMessages } = data;

        dispatch(addGroup(group));
        if (lastMessage)
          dispatch(updateGroupLastMessage(group._id, lastMessage));
      });
    });

    socket.on('new_group', data => {
      const { room } = data;
      dispatch(addGroup(room));
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
      {groups.map(group => (
        <GroupComponent key={group.idChatRoom} group={group} />
      ))}
    </Container>
  );
}
