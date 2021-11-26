import styled, { css } from 'styled-components';

type ContainerProps = {
  userMessage: boolean;
};

export const Container = styled.div<ContainerProps>`
  background: ${props =>
    props.userMessage ? 'var(--green-700)' : 'var(--gray-700)'};
  min-width: 5.85rem;
  max-width: 30rem;
  min-height: 2rem;
  padding: 0.5rem;
  align-self: ${props => (props.userMessage ? 'flex-end' : 'flex-start')};
  position: relative;
  display: flex;
  flex-direction: column;

  border-radius: 0.5rem;
  gap: 0.25rem;

  > span {
    font-size: 0.75rem;
    color: var(--green-700);
  }

  > p {
    display: flex;
    color: var(--white);
    font-size: 0.875rem;

    p {
      color: var(--white-100);
      font-size: 0.6875rem;
      margin-top: 0.5rem;
      margin-left: 2rem;
      display: flex;
      align-items: center;
      gap: 0.2rem;

      svg {
        width: 1rem;
        height: 1rem;
      }
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
            left: 92%;
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
            left: -7%;
            transform: translateX(50%);
          }
        `}
`;
