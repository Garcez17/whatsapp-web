import { createContext } from 'use-context-selector';
import { User } from './ChatContext';

type UserContextData = {
  user: User;
};

export const UserContext = createContext({} as UserContextData);
