import styled from 'styled-components';

interface ImageContainerStylesProps {
  video: string;
}

export const ImageContainerStyles = styled.div<ImageContainerStylesProps>`
  position: relative;
  margin: 0.5em;
  height: 14em;
  flex-grow: 1;
  width: auto;
  overflow: hidden;
  max-width: 28em;
  ${(props) => (props.video === 'video' ? 'width: 23em;' : null)}
  @media (max-width: 1400px) {
    max-width: 45%;
  }
  @media (max-width: 800px) {
    max-width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    height: ${(props) => (props.video === 'video' ? '.8em' : 0)};
    width: 0;
    top: 0;
    left: 0;
    background-color: var(--green-color);
    transition: ease 1.5s;
  }

  &:hover {
    cursor: pointer;
    .info_box {
      transition: ease 0.8s;
      opacity: 1;
    }
    cursor: pointer;
    &::after {
      width: 100%;
    }
  }

  .hovering_video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    min-height: 100%;
    min-width: 100%;
    width: auto;
    z-index: 1;

    &:hover {
      cursor: pointer;
    }
  }
`;
