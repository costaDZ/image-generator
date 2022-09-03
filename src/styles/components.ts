import styled from 'styled-components';

export const BigBtn = styled.button`
  background-color: var(--green-color);
  border-radius: 40px;
  outline: none;
  border: none;
  padding: 0.5em 1em;
  font-weight: 700;
  border: 2px solid white;

  &:hover {
    transition: var(--transition);
    background-color: white;
    border-color: var(--green-color);
    cursor: pointer;
  }
`;
