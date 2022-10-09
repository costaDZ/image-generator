import styled from 'styled-components';

export const BigImageStyles = styled.div`
  position: relative;
  display: inline-block;
  width: 70%;
  height: 40vw;
  text-align: center;

  @media (max-width: 992px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    height: 55vw;
  }
  @media (max-width: 376px) {
    height: 70vw;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    @media (max-width: 1400px) {
      width: 100%;
    }
  }

  .react_player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
