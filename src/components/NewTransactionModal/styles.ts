import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    color: var(--black);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid var(--gray);
    background: var(--black);
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  .register-button {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: var(--shape);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxPops {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#14513b',
  red: '#721726',
};

export const RadioBox = styled.button<RadioBoxPops>`
  height: 4rem;
  border: 1px solid var(--black);
  border-radius: 0.25rem;
  background: ${(props) =>
    props.isActive ? colors[props.activeColor] : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;

  &:hover {
    border-color: #191919;
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--black);
  }
`;
