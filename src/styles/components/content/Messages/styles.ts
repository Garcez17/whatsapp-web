import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const HeaderMessages = styled.header`
  height: 3.75rem;
  background: var(--gray-700);

  display: flex;
  justify-content: space-between;

  padding: 0.625rem 1rem;

  img {
    border-radius: 50%;
  }
`;

export const Info = styled.div`
  display: flex;
`;

export const Text = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.15rem;

  span {
    color: var(--white);
  }

  p {
    color: var(--white-100);
    font-size: 0.8125rem;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  svg {
    color: var(--gray-200);
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const Content = styled.main`
  flex: 1;
  padding: 1rem 4rem;
  background: var(--gray-950);
  gap: 0.125rem;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
`;

export const InputBar = styled.footer`
  height: 3.75rem;
  background: var(--gray-850);
  padding: 0.6rem 1rem;
  gap: 1.25rem;

  display: flex;
  align-items: center;

  form {
    display: flex;
    align-items: center;
    flex: 1;
    gap: 1rem;

    button {
      border: 0;
      background: transparent;

      svg {
        width: 2rem;
        height: 2rem;
      }
    }
  }

  svg {
    width: 1.625rem;
    height: 1.625rem;
    color: var(--gray-350);
  }
`;
