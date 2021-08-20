import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Loader from '../Loader';
import InfoBox from './InfoBox';

import { connect } from 'react-redux';
import { addToDownload } from '../../redux/actions/downloadActions';

function ImageContainer({
    kind,
    id,
    img,
    webformatURL,
    tags,
    likes,
    comments,
    duration,
    videos,
    isLoading,
    goToDownload,
    LoadMainImages,
    startSearchingVideos
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
    function playVideo(v, e) {
        let itemkind = containerRef.current.dataset.kind;
        if (itemkind === ("video")) {
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
        let firstChild = containerRef.current.firstElementChild.firstElementChild;
        if (videos && play) {
            video.classList.add("hovering_video");
            video.setAttribute("autoPlay", true);
            video.setAttribute("muted", true);
            video.setAttribute("loop", true);
            let source = document.createElement("source");
            source.setAttribute("src", `${videos.tiny.url}`);
            source.setAttribute("type", "video/ogg");
            if (window.innerWidth <= 600) {
                video.setAttribute("width", "100");
                video.setAttribute("height", "100");
            }
            video.appendChild(source);
            containerRef.current.firstElementChild.prepend(video);
        }
        else if (videos && !play && firstChild.tagName === 'VIDEO') {
            containerRef.current.firstElementChild.removeChild(firstChild);
        }
    }, [play]);


    return (
        <ImageContainerStyles
            key={id}
            onMouseOver={(e) => playVideo("set", e)}
            onMouseLeave={(e) => playVideo("t", e)}
            video={duration ? "video" : "image"}
            ref={containerRef}
            data-kind={duration ? "video" : "image"}
        >

            {
                (loader || isLoading)
                    ?
                    <Loader />
                    :
                    <>
                        <Link to={`/download/${id}`} onClick={() => {
                            goToDownload(img)
                            let target = tags.split(",")[0];
                            if (videos) {
                                startSearchingVideos(target, 1, 8);
                            } else {
                                LoadMainImages(kind, target, 1, 8);
                            }

                        }}>
                            <img src={webformatURL} height="400" width="400" alt={tags} loading="lazy" />
                        </Link>
                        <InfoBox
                            img={img}
                            id={id}
                            videos={videos}
                            tags={tags}
                            kind={duration ? "video" : "image"}
                            duration={duration}
                            likes={likes}
                            comments={comments}
                            currentLocation={kind}
                            goToDownload={goToDownload}
                        />
                    </>
            }
        </ImageContainerStyles >
    )
}

const mapDispatchToProps = dispatch => ({
    goToDownload: (item) => dispatch(addToDownload(item)),
});


export default connect(null, mapDispatchToProps)(ImageContainer);




const ImageContainerStyles = styled.div`
        position: relative;
        margin: .5em;
        height: 14em;
        flex-grow: 1;
        width: auto;
        overflow: hidden;
        max-width: 28em;
        ${props => props.video === "video" ? "width: 23em;" : null}
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
            content :"";
            position: absolute;
            height: ${props => props.video === "video" ? ".8em" : 0};
            width: 0;
            top: 0;
            left: 0;
            background-color: var(--green-color);
            transition: ease 1.5s;
        }

        &:hover {
            cursor: pointer;
            .info_box {
                transition: ease .8s;
                opacity: 1;
            }
            cursor:pointer;
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
        cursor:pointer;
        }
    }
`
