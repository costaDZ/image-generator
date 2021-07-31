import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Loader from './Loader';
import InfoBox from './InfoBox';

import { connect } from 'react-redux';


function ImageContainer({
    currentLocation,
    id,
    webformatURL,
    tags,
    likes,
    comments,
    kind,
    duration,
    videos,
    isLoading
}) {

    const [play, setPlay] = useState(false);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        let loaderTrigger = setTimeout(() => {
            setLoader(false);
        }, 2000);
        return () => clearTimeout(loaderTrigger);
    }, []);

    let timer;
    function playVideo(v) {
        if (currentLocation === ("videos")) {
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



    return (
        <ImageContainerStyles
            key={id}
            onMouseOver={() => playVideo("set")}
            onMouseLeave={() => playVideo("t")}
            video={kind}
        >

            {
                (loader || isLoading)
                    ?
                    <Loader />
                    :
                    <>
                        <img src={webformatURL} height="100%" width="100%" alt={tags} />
                        {videos &&
                            <video
                                className="hovering_video" autoPlay muted loop
                                style={{ display: play ? "block" : "none" }}
                            >
                                <source src={videos.tiny.url} type="video/mp4" />
                                {/* <source src={videos.tiny.url} type="video/ogg" /> */}
                                Your browser does not support the video tag.
                            </video>
                        }
                        <InfoBox videos={videos}
                            tags={tags}
                            kind={kind}
                            duration={duration}
                            likes={likes}
                            comments={comments}
                            currentLocation={currentLocation}
                        />
                    </>
            }

        </ImageContainerStyles >
    )
}

const mapStateToProps = state => ({
    currentLocation: state.nav.category
})

export default connect(mapStateToProps)(ImageContainer);


const ImageContainerStyles = styled.div`
        position: relative;
        margin: 1em;
        height: 20em;
        flex-grow: 1;
        max-width:  ${props => props.video ? "32em" : "50%"};
        overflow: hidden;
        @media (max-width: 850px) {
            min-width: 80%;

        }
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
        display: none;
        &:hover {
        cursor:pointer;
        }
    }
`
