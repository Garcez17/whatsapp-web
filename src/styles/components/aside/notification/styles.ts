import styled from 'styled-components';

export const Container = styled.div`
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
