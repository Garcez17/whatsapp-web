export enum UserActionTypes {
  loginUser = 'LOGIN_USER',
}

export type User = {
  _id: string;
  id: string;
  name: string;
  email: string;
  avatar: string;
  socket_id: string;
  is_online: boolean;
};

export type UserState = {
  user: User;
};
