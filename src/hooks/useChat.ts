import { useContextSelector } from 'use-context-selector';
import { ChatContext } from '../contexts/ChatContext';

export function useChat() {
  const currentUserChat = useContextSelector(
    ChatContext,
    chat => chat.currentUserChat,
  );
  const chats = useContextSelector(ChatContext, chat => chat.chats);
  const loadUser = useContextSelector(ChatContext, chat => chat.loadUser);
  const loadUsers = useContextSelector(ChatContext, chat => chat.loadUsers);

  return {
    currentUserChat,
    chats,
    loadUser,
    loadUsers,
  };
}
