import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 100%;
  background: var(--gray-500);
  border-radius: 2rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  color: var(--gray-350);

  input {
    flex: 1;
    background: transparent;
    border: 0;
    font-size: 0.9375rem;
    outline: none;
  }

  svg + input {
    margin-left: 2.5rem;
  }
`;
