import { useContextSelector } from 'use-context-selector';
import { UserContext } from '../contexts/UserContext';

export function useUser() {
  const user = useContextSelector(UserContext, usrCtx => usrCtx.user);
  const setUserProfile = useContextSelector(
    UserContext,
    usrCtx => usrCtx.setUserProfile,
  );

  return {
    user,
    setUserProfile,
  };
}
