import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Loader from '../Loader/Loader';
import ReactPlayer from 'react-player';

interface BigImageViewProps {
  info: any;
  targetType: any;
}

const BigImageView: React.FC<BigImageViewProps> = ({ info, targetType }: BigImageViewProps) => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const loaderTrigger = setTimeout(() => {
      setLoader(false);
    }, 2000);
    return () => clearTimeout(loaderTrigger);
  }, []);

  return (
    <BigImageStyles>
      {targetType === 'video' ? (
        loader ? (
          <Loader />
        ) : (
          <ReactPlayer
            className="react_player"
            controls
            url={info.tinyUrl}
            width="100%"
            height="100%"
          />
        )
      ) : loader ? (
        <Loader />
      ) : (
        <picture>
          <source media="(min-width:650px)" srcSet={info.largeUrl} />
          <img src={info.mediumUrl} alt="Flowers" />
        </picture>
      )}
    </BigImageStyles>
  );
};

export default BigImageView;

const BigImageStyles = styled.div`
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
