import { useContextSelector } from 'use-context-selector';
import { ChatContext } from '../contexts/ChatContext';

export function useChat() {
  const user = useContextSelector(ChatContext, chat => chat.user);
  const loadUser = useContextSelector(ChatContext, chat => chat.loadUser);

  return {
    user,
    loadUser,
  };
}
