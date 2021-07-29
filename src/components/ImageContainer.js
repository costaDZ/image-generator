import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Loader from './Loader';

import { connect } from 'react-redux';
import { loadPhotos } from '../redux/thunk/thunk';

function ImageContainer({ startSeraching, id, webformatURL, tags, likes, comments, kind, duration, videos, isLoading }) {

    const [play, setPlay] = useState(false);
    const [loader, setLoader] = useState(true);
    let location = useLocation();

    useEffect(() => {
        let loaderTrigger = setTimeout(() => {
            setLoader(false);
        }, 2000);
        return () => clearTimeout(loaderTrigger);
    }, []);



    let timer;
    function playVideo(v) {
        if (location.pathname === ("/Videos")) {
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

    function startSearch(e) {
        console.log(e.target.textContent);
        startSeraching(e.target.textContent);
    }


    return (
        <ImageContainerStyles key={id} onMouseOver={() => playVideo("set")} onMouseLeave={() => playVideo("t")}>

            {
                (() => {
                    if (loader || isLoading)
                        return <Loader />
                    if (!isLoading && kind === 'videos')
                        return (
                            <>
                                <img src={webformatURL} height="100%" width="100%" alt={tags} />
                                <video
                                    className="hovering_video" autoPlay muted loop
                                    style={{ display: play ? "block" : "none" }}
                                >
                                    <source src={videos.tiny.url} type="video/mp4" />
                                    <source src={videos.tiny.url} type="video/ogg" />
                                    Your browser does not support the video tag.
                                </video>
                                <InfoBoxVideos data-url={videos.medium.url} >
                                    <div className="tags">
                                        {tags.split(',').map((tag, i) => {
                                            return (
                                                <button key={i}>{tag}</button>
                                            )
                                        })
                                        }
                                    </div>
                                    <div className="likes_comments">
                                        <div className="quality_diration">
                                            <p>0:{duration}</p>
                                            <b>4K</b>
                                        </div>
                                    </div>
                                </InfoBoxVideos>
                            </>
                        )
                    else
                        return (
                            <>
                                <img src={webformatURL} height="100%" width="100%" alt={tags} />
                                <InfoBox hide >
                                    <div className="tags">
                                        {tags.split(',').map((tag, i) => {
                                            return (
                                                <button
                                                    onClick={(e) => startSearch(e)}
                                                    key={i}
                                                >{tag}</button>
                                            )
                                        })
                                        }
                                    </div>
                                    <div className="likes_comments">
                                        <div className="likes">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                                                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                                            </svg>
                                            <p>{likes}</p>
                                        </div>
                                        <div className="comments">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-fill" viewBox="0 0 16 16">
                                                <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                                            </svg>
                                            <p>{comments}</p>
                                        </div>
                                        <div className="collections">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-fill" viewBox="0 0 16 16">
                                                <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                </InfoBox>
                            </>
                        )
                })()
            }

        </ImageContainerStyles>
    )
}

const mapDispatchToProps = dispatch => ({
    startSeraching: (searchKey) => dispatch(loadPhotos(searchKey))
})

export default connect(null, mapDispatchToProps)(ImageContainer);





















const ImageContainerStyles = styled.div`
        position: relative;
        height: 20em;
       // flex-grow: 1;
       // max-width: 50%;
        width: 100%;
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

const InfoBox = styled.div`
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            justify-content: space-between;
            position: absolute;
            opacity: ${props => props.hide ? 0 : 1};
            color: var(--white-color);
            height: 100%;

            bottom: 0;
            background: linear-gradient(0deg,rgb(0 0 0 / 90%) 0,transparent);
            width: 100%;


            &:hover {
                transition: ease .8s;
                cursor: pointer;
                opacity: 1;
            };
        
            .tags {
                display: flex;
                padding: 1em 0;
                position:relative;
                z-index: 3;
                button {
                        background-color: transparent;
                        font-weight: 700;
                        color: var(--white-color);
                        border: none;
                        transition:var(--transition);
                        cursor: pointer;
                        border-radius: 8px;

                        &:hover {
                            background-color: #ffffff70;
                        }
                }
            }
        

        .likes_comments, .likes, .comments, .quality_diration {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 .5em;
            position:relative;
                z-index: 3;
            p {
            margin-left: .2em;
            }
            b {
                margin-left: .7em;
            }
            svg {

                fill: transparent;
                stroke: white;
            &:hover {
                transition: var(--transition);
                color: var(--green-color);
            }
            }
        }
    
`



const InfoBoxVideos = styled(InfoBox)`
    &::after {
            content :"";
            position: absolute;
            height: .8em;
            width: 0;
            top: 0;
            left: 0;
            background-color: var(--green-color);
            transition: ease .8s;
        }

    &:hover {
        cursor:pointer;
        &::after {
            width: 100%;
        }
    }
`
