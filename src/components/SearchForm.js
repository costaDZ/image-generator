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
} from '../redux/thunk/thunk.js';


function SearchForm({
    startSearchingImages,
    startSearchingPhotos,
    startSearchingVectors,
    startSearchingIllistrator,
    startSearchingVideos,
    currentLocation,
    section
}) {

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
        <>
            <SearchFormStyles
                onSubmit={(e) => startSearch(e, e.target.lastElementChild.value, "search")}>
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

            </SearchFormStyles>
            <PopulairImagesStyle >
                <h4>Populair Images : </h4>
                {section.populair?.map((item, i) => {
                    return <button
                        key={i}
                        onClick={(e) => startSearch(e, e.target.textContent, "btn")}
                    >{item}</button>
                })}
            </PopulairImagesStyle>
        </>
    )
}

const mapStateToProps = state => ({
    currentLocation: state.nav.category,
})
const mapDispatchToProps = dispatch => ({
    startSearchingImages: searchKey => dispatch(loadImages(searchKey)),
    startSearchingPhotos: searchKey => dispatch(loadPhotos(searchKey)),
    startSearchingVectors: searchKey => dispatch(loadVectors(searchKey)),
    startSearchingIllistrator: searchKey => dispatch(loadIllistrator(searchKey)),
    startSearchingVideos: searchKey => dispatch(loadVideos(searchKey)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);


const SerachIcon = styled(Search)`
        height : 2em;
`

const SearchFormStyles = styled.form`
        display: flex;
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
    
`;

const PopulairImagesStyle = styled.div`
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
`;
