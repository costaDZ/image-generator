import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { loadImages, loadVideos } from '../../redux/thunk/thunk.js';

import { handelLikedImages, addToCollection } from '../../redux/actions/actions';

function InfoBoxContainer({
    id,
    img,
    videos,
    tags,
    kind,
    duration,
    likes,
    comments,
    currentLocation,
    startSearchingImages,
    startSearchingVideos,
    toggelLike,
    likedItems,
    toggleCollection,
    collectionItems
}) {

    function startSearch(e) {
        let valueKeySearch = e.target.textContent;
        switch (currentLocation) {
            case "videos":
                startSearchingVideos(valueKeySearch, 1);
                break;
            default:
                startSearchingImages(currentLocation, valueKeySearch, 1);
                break;
        }
    }

    let checkItems = likedItems.find(item => item.id === id);
    let collection = collectionItems.find(item => item.id === id);


    return (
        <InfoBox data-url={videos && videos.medium.url} k={kind}>
            <div className="tags">
                {tags.replace(/\s/g, "").split(',').map((tag, i) => {
                    return (
                        <button
                            key={i}
                            onClick={(e) => startSearch(e)}
                        >{tag}</button>
                    )
                })
                }
            </div>
            <div className="likes_comments">

                {kind === 'videos' ?
                    <div className="quality_diration">
                        <p>0:{duration}</p>
                        <b>4K</b>
                    </div>
                    :
                    <>
                        <div className="likes">
                            <button
                                title={checkItems ? "dislike" : "Like"}
                                onClick={() => toggelLike(img)}>
                                {
                                    checkItems
                                        ? <i className="bi bi-hand-thumbs-up-fill"></i>
                                        : <i className="bi bi-hand-thumbs-up" ></i>
                                }
                            </button>

                            <p>{checkItems ? likes + 1 : likes}</p>
                        </div>

                        <div className="comments">
                            <i className="bi bi-chat-dots"></i>
                            <p>{comments}</p>
                        </div>

                        <div className="collections">
                            <button
                                title={checkItems ? "Add to my collection" : "Remove from my collection"}
                                onClick={() => toggleCollection(img)}>
                                {
                                    collection
                                        ? <i className="bi bi-plus-square-fill"></i>
                                        : <i className="bi bi-plus-square"></i>
                                }
                            </button>
                        </div>

                    </>
                }
            </div>

        </InfoBox>
    )
}

const mapStateToProps = state => ({
    likedItems: state.likedItem,
    collectionItems: state.myCollection,

});

const mapDispatchToProps = dispatch => ({
    startSearchingImages: (searchKey, page) => dispatch(loadImages(searchKey, page)),
    startSearchingVideos: (searchKey) => dispatch(loadVideos(searchKey)),
    toggelLike: item => dispatch(handelLikedImages(item)),
    toggleCollection: item => dispatch(addToCollection(item)),
});



export default connect(mapStateToProps, mapDispatchToProps)(InfoBoxContainer);



const InfoBox = styled.div`
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            justify-content: space-between;
            position: absolute;
            opacity: ${props => props.k === "videos" ? 1 : 0};
            color: var(--white-color);
            height: 100%;

            bottom: 0;
            background: linear-gradient(0deg,rgb(0 0 0 / 90%) 0,transparent);
            width: 100%;

                ${props => props.k !== "videos" ? " @media (max-width: 768px) {opacity: 1;height: 30%;}" : ""}


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
            button {
                background-color: transparent;
                outline: none;
                border: none;
                color: white;
                font-size: 1em;

                .bi-hand-thumbs-up-fill , .bi-plus-square-fill{
                    color: var(--green-color);
                }
            }

            i {
                font-size: 1.5em;

                &:hover {
                    color: var(--green-color);
                    cursor: pointer;
                } 
            }

            
        }

        &::after {
            content :"";
            position: absolute;
            height: ${props => props.k === "videos" ? ".8em" : 0};
            width: 0;
            top: 0;
            left: 0;
            background-color: var(--green-color);
            transition: ease 1.5s;
        }

    &:hover {
        cursor:pointer;
        &::after {
            width: 100%;
        }
    }
`

