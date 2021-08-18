import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Loader from '../Loader';
import ReactPlayer from 'react-player'


function BigImageView({ targetType, itemToDownload }) {

    const [loader, setLoader] = useState(true);
    useEffect(() => {
        let loaderTrigger = setTimeout(() => {
            setLoader(false);
        }, 2000);
        return () => clearTimeout(loaderTrigger);
    }, []);

    return (
        <BigImageStyles>
            {targetType === "video" ?

                loader ? <Loader /> :
                    <ReactPlayer
                        className="react_player"
                        controls
                        url={itemToDownload.videos.tiny.url}
                        width='100%'
                        height='100%'
                    /> :

                loader ? <Loader /> :
                    <picture>
                        <source media="(min-width:650px)" srcSet={itemToDownload.largeImageURL} />
                        <img src={itemToDownload.webformatURL} alt="Flowers" />
                    </picture>

            }
        </BigImageStyles>
    )
}


export default BigImageView;

const BigImageStyles = styled.div`
    position: relative;
    display: inline-block;
    width: 70%; 
    height: 38em; 
    overflow: hidden;
    text-align: center;

    picture {
    width: 100%;
    height: 100%;
    }

    img {
      //  width: 100%;
        height: 100%;
    }

    .react_player {
        position: absolute;
        top: 0;
        left: 0; 
    }
`;
