import styled from 'styled-components';

export const Container = styled.div`
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
