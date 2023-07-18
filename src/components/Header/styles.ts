import styled from 'styled-components';

export const Container = styled.header`
  background: var(--gray);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;

  h1 {
    color: var(--black);
  }

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 5rem;
    height: 3rem;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
