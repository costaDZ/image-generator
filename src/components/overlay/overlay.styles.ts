import styled from 'styled-components';

interface SearchHolderStyleProps {
  img: string;
}

export const SearchHolder = styled.section<SearchHolderStyleProps>`
  position: relative;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 70vh;
  color: white;
  background: url(${(props) => props.img || ''}) center/cover no-repeat;

  .main-title {
    font-size: 2.5em;
  }

  video {
    left: 50%;
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`;
