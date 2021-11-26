import styled from 'styled-components';

export const Container = styled.header`
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
