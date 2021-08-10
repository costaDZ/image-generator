import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import Loader from '../Loader';
import InfoBox from './InfoBox';


function ImageContainer({
    kind,
    id,
    webformatURL,
    tags,
    likes,
    comments,
    duration,
    videos,
    isLoading
}) {

    const [play, setPlay] = useState(false);
    const [loader, setLoader] = useState(true);
    const containerRef = useRef(null);

    useEffect(() => {
        let loaderTrigger = setTimeout(() => {
            setLoader(false);
        }, 2000);
        return () => clearTimeout(loaderTrigger);
    }, []);

    let timer;
    function playVideo(v) {
        if (kind === ("videos")) {
            if (v === "set") {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    setPlay(true);
                }, 1000);
            } else {
                setPlay(false);
                clearTimeout(timer);
            }
        }
    }

    useEffect(() => {
        let video = document.createElement("video");
        let firstChild = containerRef.current.firstElementChild;
        if (videos && play) {
            video.classList.add("hovering_video");
            video.setAttribute("autoPlay", true);
            video.setAttribute("muted", true);
            video.setAttribute("loop", true);
            let source = document.createElement("source");
            source.setAttribute("src", `${videos.tiny.url}`);
            source.setAttribute("type", "video/ogg");
            video.appendChild(source);
            containerRef.current.prepend(video);
        }
        else if (videos && !play && firstChild.tagName === 'VIDEO') {
            containerRef.current.removeChild(firstChild);
        }
    }, [play]);

    return (
        <ImageContainerStyles
            key={id}
            onMouseOver={() => playVideo("set")}
            onMouseLeave={() => playVideo("t")}
            video={kind}
            ref={containerRef}
        >

            {
                (loader || isLoading)
                    ?
                    <Loader />
                    :
                    <>
                        <img src={webformatURL} height="100%" width="100%" alt={tags} />
                        <InfoBox
                            videos={videos}
                            tags={tags}
                            kind={kind}
                            duration={duration}
                            likes={likes}
                            comments={comments}
                            currentLocation={kind}
                        />
                    </>
            }

        </ImageContainerStyles >
    )
}


export default ImageContainer;



















const ImageContainerStyles = styled.div`
        position: relative;
        margin: 1em;
        height: 20em;
        flex-grow: 1;
        max-width:  ${props => props.video ? "29em" : "50%"};
        overflow: hidden;

        ${props => props.video ? " @media (max-width: 1000px) {min-width: 40em;}" : ""}


        
        /* @media (max-width: 992px)  {
            min-width: 80%;

        } */
        @media (max-width: 650px) {
            min-width: 100%;
        }

    .hovering_video {
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        right: 0;
        width: 38em;
        display: block;
        &:hover {
        cursor:pointer;
        }
    }
`
