import styled from 'styled-components';

export const Container = styled.div`
  width: 27rem;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--gray-400);
`;

export const Header = styled.header`
  height: 3.75rem;
  background: var(--gray-700);

  display: flex;
  justify-content: space-between;

  padding: 0.6rem 1rem;

  img {
    border-radius: 50%;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  svg {
    width: 1.2rem;
    height: 1.2rem;
    color: var(--gray-300);
  }
`;

export const Notification = styled.div`
  height: 5.625rem;
  background: var(--blue-600);
  cursor: pointer;

  padding: 0 1rem;

  display: flex;
  align-items: center;
`;

export const ContainerBell = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--blue-100);

  svg {
    color: var(--blue-600);
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const ContainerInfoNotification = styled.div`
  margin-left: 1rem;

  span {
    color: var(--white-100);
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const SubTitleNotification = styled.div`
  display: flex;
  align-items: center;
  color: #f1f1f2bf;

  p {
    margin-top: 0.25rem;
    font-size: 0.875rem;
  }

  svg {
    align-self: flex-end;
  }
`;

export const SearchBar = styled.div`
  height: 3rem;
  background: var(--gray-900);
  border-bottom: 1px solid #252d32;
  padding: 0.35rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.div`
  flex: 1;
  height: 100%;
  background: var(--gray-500);
  border-radius: 2rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  color: var(--gray-350);

  input {
    background: transparent;
    border: 0;
    font-size: 0.9375rem;
  }

  svg + input {
    margin-left: 2.5rem;
  }
`;

export const ChatsContainer = styled.div`
  flex: 1;
  background: var(--gray-900);
  overflow: auto;

  display: flex;
  flex-direction: column;
`;

export const ArchivedContainer = styled.div`
  height: 3.125rem;
  display: flex;
  align-items: center;
  background: var(--gray-900);

  padding: 0 0 0 1rem;

  transition: 0.1s;

  cursor: pointer;

  svg + div {
    margin-left: 3rem;
  }
`;

export const IconContainer = styled.div`
  width: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: var(--green-500);
  }
`;

export const ArchivedContent = styled.div`
  margin-left: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 0;

  border-bottom: 1px solid var(--gray-400);

  span {
    color: var(--white-100);
  }
`;

export const Chat = styled.div`
  height: 4.5rem;
  display: flex;
  align-items: center;
  background: var(--gray-900);

  padding: 0 0 0 1rem;

  transition: 0.1s;

  cursor: pointer;

  img {
    border-radius: 50%;
  }

  :hover {
    background: var(--gray-550);
  }
`;

export const ChatContent = styled.div`
  margin-left: 1rem;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;

  border-bottom: 1px solid var(--gray-400);
`;

export const TitleAndMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    font-size: 1.0625rem;
  }

  p {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    color: var(--gray-100);
  }
`;

type TimeMessageProps = {
  hasMessage?: boolean;
};

export const TimeAndMessages = styled.div<TimeMessageProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-right: 1rem;

  > span {
    font-size: 0.75rem;
    color: ${props =>
      props.hasMessage ? 'var(--green-500)' : 'var(--white-100)'};
  }
`;

export const MessageCounter = styled.div`
  margin-top: 0.15rem;
  width: 1.5rem;
  height: 1.5rem;
  background: var(--green-500);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 0.75rem;
    color: var(--gray-900);
    font-weight: bold;
  }
`;
