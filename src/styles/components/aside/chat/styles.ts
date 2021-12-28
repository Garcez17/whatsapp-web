import { BsCheck2All } from 'react-icons/bs';
import styled from 'styled-components';

export const Container = styled.div`
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
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  span {
    font-size: 1.0625rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.25rem;
    flex: 1;

    /* svg {

    } */

    p {
      width: 100%;
      height: 1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 0.875rem;
      color: var(--gray-100);
    }
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

type CheckIconProps = {
  isRead: boolean;
};

export const CheckIcon = styled(BsCheck2All)<CheckIconProps>`
  width: 1rem;
  height: 1rem;
  color: ${props => (props.isRead ? 'var(--blue-500)' : 'var(--gray-100)')};
`;
