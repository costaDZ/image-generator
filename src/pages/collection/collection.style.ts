import styled from 'styled-components';

export const CollectionStyled = styled.section`
  padding: 6em 0;
  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3vw;
    color: var(--grey-text);
    width: 100%;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 2em;
    }
  }
`;
