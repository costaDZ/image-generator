import React from 'react';
import styled from 'styled-components';

import { Search } from '@styled-icons/bootstrap/Search';

import { connect } from 'react-redux';
import {
    loadPhotos,
    loadVectors,
    loadIllistrator,
    loadImages,
    loadVideos
} from '../../redux/thunk/thunk';


const Overlay = ({
    startSearchingImages,
    startSearchingPhotos,
    startSearchingVectors,
    startSearchingIllistrator,
    startSearchingVideos,
    section,
    currentLocation
}) => {

    function startSearch(e, val, check) {
        e.preventDefault();
        if (check === "search") e.target.lastElementChild.value = "";
        switch (currentLocation) {
            case "main":
                startSearchingImages(val);
                break;
            case "photos":
                startSearchingPhotos(val);
                break;
            case "vectors":
                startSearchingVectors(val);
                break;
            case "illistrations":
                startSearchingIllistrator(val);
                break;
            case "videos":
                startSearchingVideos(val);
                break;
            default:
                break;
        }
    }


    return (
        <SearchHolder img={section.back}>

            <h1 className="main-title">
                {section.title}
            </h1>

            <p className="desc">
                {section.dec}
            </p>

            {section.video &&
                <video className="video" autoPlay muted loop >
                    <source src={section.video} type="video/mp4" />
                    <source src={section.video} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
            }

            <form className="search-form" onSubmit={(e) => startSearch(e, e.target.lastElementChild.value, "search")}>
                <button
                    className="search-btn"
                    type="submit"
                    aria-label="search"
                >
                    <SerachIcon />
                </button>
                <input
                    className="search-input"
                    placeholder={`Search ${section.category} ...`}
                    required
                />
            </form>

            <div className="populair-images">
                <h4>Populair Images : </h4>
                {section.populair?.map((item, i) => {
                    return <button
                        key={i}
                        onClick={(e) => startSearch(e, e.target.textContent, "btn")}
                    >{item}</button>
                })}
            </div>

        </SearchHolder>
    )
}

const mapStateToProps = state => ({
    section: state.nav,
    currentLocation: state.nav.category
})

const mapDispatchToProps = dispatch => ({
    startSearchingImages: (searchKey) => dispatch(loadImages(searchKey)),
    startSearchingPhotos: (searchKey) => dispatch(loadPhotos(searchKey)),
    startSearchingVectors: (searchKey) => dispatch(loadVectors(searchKey)),
    startSearchingIllistrator: (searchKey) => dispatch(loadIllistrator(searchKey)),
    startSearchingVideos: (searchKey) => dispatch(loadVideos(searchKey)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Overlay);








const SerachIcon = styled(Search)`
                    height : 2em;
                    `

const SearchHolder = styled.section`
                    position: relative;
                    overflow-y: hidden;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                    min-height: 70vh;
                    color: white;
                    background : url(${props => props.img}) center/cover no-repeat;

                    .main-title {
                        font-size: 2.5em;
                    }

                    video {
                        left: 50%;
                        min-height: 100%;
                        min-width: 100%;
                        position: absolute;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        z-index: -1;
                    }


                    .search-form {
                    display: flex;
                    /* padding: 2px 4px;
                    align-items: center; */
                    width: 40%;


                    .search-btn {
                    border: none;
                    border-radius: 4px;
                    position: relative;
                    left: 5px;
                    cursor: pointer;
                    padding: 1em;
                    color: var(--grey-text);
                    transition: var(--transition);
                        &:hover {
                            color: black;
                        }
                    }

                    .search-input {
                    font-weight: 700;
                    font-size: 1em;
                    padding: 13px;
                    border-radius: 4px;
                    outline: none;
                    border: none;
                    width: 100%;
        }

    }


                    .populair-images {

                        h4 {
                        display : inline-block;
                        }

                    button {
                    font-size: .8em;
                    background: #02be6e78;
                    border-radius: 30px;
                    color: white;
                    cursor: pointer;
                    padding: .2em .4em;
                    margin: 0 .1em;
                    font-weight: 700;
                    
                    }
    }
                    `
