import { useContextSelector } from 'use-context-selector';
import { RoomContext } from '../contexts/RoomContext';

export function useRoom() {
  const roomId = useContextSelector(RoomContext, room => room.roomId);
  const messages = useContextSelector(RoomContext, Room => Room.messages);
  const loadMessages = useContextSelector(
    RoomContext,
    Room => Room.loadMessages,
  );
  const insertMessage = useContextSelector(
    RoomContext,
    Room => Room.insertMessage,
  );
  const insertRoomId = useContextSelector(
    RoomContext,
    Room => Room.insertRoomId,
  );

  return {
    roomId,
    messages,
    loadMessages,
    insertMessage,
    insertRoomId,
  };
}
