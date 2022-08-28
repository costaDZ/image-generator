import styled from 'styled-components';

interface IndoBoxProps {
  k: string;
}

export const InfoBox = styled.div<IndoBoxProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  position: absolute;
  opacity: ${(props) => (props.k === 'video' ? 1 : 0)};
  color: var(--white-color);
  bottom: 0;
  background: linear-gradient(0deg, rgb(0 0 0 / 90%) 0, transparent);
  width: 100%;
  ${(props) => (props.k !== 'video' ? ' @media (max-width: 768px) {opacity: 1;}' : '')}
  .tags {
    display: flex;
    padding: 1em 0;
    position: relative;
    z-index: 3;
    button {
      background-color: transparent;
      font-weight: 700;
      color: var(--white-color);
      border: none;
      transition: var(--transition);
      cursor: pointer;
      border-radius: 8px;

      &:hover {
        background-color: #ffffff70;
      }
    }
  }

  .likes_comments,
  .likes,
  .comments,
  .quality_diration {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0.5em;
    position: relative;
    z-index: 3;
    p {
      margin-left: 0.2em;
    }
    b {
      margin-left: 0.7em;
    }
    a {
      color: white;
    }
    button {
      background-color: transparent;
      outline: none;
      border: none;
      color: white;
      font-size: 1em;

      .bi-hand-thumbs-up-fill,
      .bi-dash-square-fill {
        color: var(--green-color);
      }
    }

    i {
      font-size: 1.5em;

      &:hover {
        color: var(--green-color);
        cursor: pointer;
      }
    }
  }
`;
