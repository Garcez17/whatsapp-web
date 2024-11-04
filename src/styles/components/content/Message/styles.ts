import styled, { css } from 'styled-components';

type ContainerProps = {
  userMessage: boolean;
};

export const Container = styled.button<ContainerProps>`
  align-self: ${props => (props.userMessage ? 'flex-end' : 'flex-start')};
  display: flex;
  gap: 16px;
  background: transparent;
  border: 0;
  text-align: left;

  img {
    border-radius: 50%;
  }
`;

export const MsgWrapper = styled.div<ContainerProps>`
  background: ${props =>
    props.userMessage ? 'var(--green-700)' : 'var(--gray-700)'};
  min-width: 5.85rem;
  max-width: 30rem;
  /* min-height: 2rem; */
  padding: 0.5rem;
  align-self: ${props => (props.userMessage ? 'flex-end' : 'flex-start')};
  position: relative;
  display: flex;
  flex-direction: column;

  border-radius: 0.5rem;
  gap: 0.25rem;

  > span {
    font-size: 0.75rem;
    color: var(--blue-500);
  }

  > p {
    display: flex;
    color: var(--white);
    font-size: 0.875rem;

    span {
      color: var(--white-100);
      font-size: 0.6875rem;
      margin-left: 2rem;
      display: flex;
      align-items: flex-end;
      gap: 0.2rem;
    }
  }

  ${props =>
    props.userMessage
      ? css`
          &::before {
            content: '';
            border-style: solid;
            border-color: var(--green-700) transparent;
            border-width: 13px 8px 0 10px;
            top: 0;
            position: absolute;
            right: 0%;
            transform: translateX(50%);
          }
        `
      : css`
          &::before {
            content: '';
            border-style: solid;
            border-color: var(--gray-700) transparent;
            border-width: 15px 6px 0 10px;
            top: 0;
            position: absolute;
            right: 100%;
            transform: translateX(50%);
          }
        `}
`;
