import styled from 'styled-components';

export const DownloadStyled = styled.section`
  padding: 5em 5em;

  @media (max-width: 768px) {
    padding: 5em 2em;
  }
  @media (max-width: 376px) {
    padding: 3em 0.5em;
  }

  .first_container {
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 992px) {
      flex-direction: column;
      height: 60em;
    }

    .side_bar {
      position: relative;
      padding: 0em 1em;
    }
  }
  .related_images {
    h3 {
      color: var(--grey-text);
    }
  }
`;
