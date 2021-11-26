import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 6px solid var(--green-700);

  padding: 0 15rem;

  span {
    display: block;
    margin-top: 2.375rem;
    font-size: 2.25rem;
    color: var(--white-100);
  }

  p {
    margin-top: 1.5rem;
    font-size: 0.875rem;
    color: var(--gray-300);
    text-align: center;
  }
`;
