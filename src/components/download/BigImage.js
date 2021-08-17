import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Vimeo from '@u-wave/react-vimeo';
import Loader from '../Loader';
import ReactPlayer from 'react-player'


function BigImageView({ targetType, large, normal, small, tiny }) {

    const [loader, setLoader] = useState(true);
    useEffect(() => {
        let loaderTrigger = setTimeout(() => {
            setLoader(false);
        }, 2000);
        return () => clearTimeout(loaderTrigger);
    }, []);

    if (targetType === "video") {

        return (
            <BigImageStyles>
                {loader ? <Loader /> :
                    <ReactPlayer
                        className="react_player"
                        controls
                        url={tiny.url}
                        width='100%'
                        height='100%'
                    />}
            </BigImageStyles>
        )
    } else {
        return (
            <BigImageStyles>
                {loader ? <Loader /> :
                    <picture>
                        <source media="(min-width:650px)" srcSet={large} />
                        <img src={normal} alt="Flowers" />
                    </picture>
                }
            </BigImageStyles>
        )
    }
}


export default BigImageView;

const BigImageStyles = styled.div`
    position: relative;
    display: inline-block;
    width: 70%; 
   // border: 2px solid;
    height: 38em; 
    overflow: hidden;

    picture {
    width: 100%;
    height: 100%;
    }

    img {
        width: 100%;
        height: 100%;
    }
     
    .react_player {
        position: absolute;
        top: 0;
        left: 0; 
    }


`;
