import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { State } from '../../store/modules/rootReducer';
import { UserState } from '../../store/modules/user/types';

import { Chats } from './Chats';
import { Header } from './Header';
import { Notification } from './Notification';
import { SearchBar } from './SearchBar';

import { Container } from '../../styles/components/aside/styles';
import { socket } from '../../service/api';
import { Group } from '../../store/modules/groups/types';
import {
  addGroup,
  setCurrentGroup,
  updateGroup,
  updateGroupLastMessage,
} from '../../store/modules/groups/actions';

export function Aside() {
  const dispatch = useDispatch();

  const { user } = useSelector<State, UserState>(state => state.user);
  const groups = useSelector<State, Group[]>(state => state.groups.groups);
  const currentGroup = useSelector<State, Group>(
    state => state.groups.currentGroup,
  );

  useEffect(() => {
    socket.on('user_joined', res => {
      const { lastMessage, room } = res;

      console.log('user_joined', { lastMessage, room });

      dispatch(addGroup(room));
      dispatch(setCurrentGroup(room));
    });
    socket.on('user_banned_notification', res => {
      const { roomId, bannedUserId, room } = res;

      const findGroup = groups.find(group => group.idChatRoom === roomId);

      const findUserBanned = findGroup.idUsers.find(
        user => user._id === bannedUserId,
      );

      alert(`${findUserBanned?.name} foi banido do grupo ${findGroup?.name}`);
      dispatch(updateGroup(roomId, room));
      if (currentGroup?._id) dispatch(setCurrentGroup(room));
    });

    socket.on('user_kicked_notification', res => {
      const { roomId, kickedUser, room, userLoggedId, exit } = res;

      alert(
        `${kickedUser?.name} ${exit ? 'saiu' : 'foi expulso'} do grupo ${
          room?.name
        }`,
      );

      // dispatch(updateGroup(roomId, room));
      dispatch(addGroup(room));
      dispatch(setCurrentGroup(room));
    });
  }, [socket, dispatch]);

  return (
    <Container>
      <Header />
      <Notification />
      <SearchBar />
      {user && <Chats />}
    </Container>
  );
}
