import styled from 'styled-components';

export const StatusBarStyled = styled.div`
  background-color: var(--green-color);
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 5;
  font-size: 0.8em;

  ul {
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    padding: 0;

    h4 {
      margin: 0.3em;
      display: inline-block;
      background: white;
      border-radius: 40px;
      padding: 0.2em 0.5em;
    }

    li {
      font-weight: 700;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`;
