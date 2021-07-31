import React from 'react';
import styled from 'styled-components';

import SearchForm from '../SearchForm';

import { connect } from 'react-redux';


<<<<<<< HEAD
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

=======
const Overlay = ({ section }) => {
    return (
        <SearchHolder img={section.back}>
>>>>>>> solve-bugs
            <h1 className="main-title">
                {section.title}
            </h1>
            <p className="desc">
                {section.dec}
            </p>

<<<<<<< HEAD
=======
            <SearchForm section={section} />

>>>>>>> solve-bugs
            {section.video &&
                <video className="video" autoPlay muted loop >
                    <source src={section.video} type="video/mp4" />
                    <source src={section.video} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
            }
<<<<<<< HEAD

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

=======
>>>>>>> solve-bugs
        </SearchHolder>
    )
}

const mapStateToProps = state => ({
    section: state.nav,
})


export default connect(mapStateToProps)(Overlay);



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
`;