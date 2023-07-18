import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--gray-200);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      color: var(--shape);

      &:first-child {
        color: var(--shape);
      }

      &.deposit {
        color: var(--green-200);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
