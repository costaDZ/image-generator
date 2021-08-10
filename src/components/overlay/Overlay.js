import React, { useEffect } from 'react';
import styled from 'styled-components';

import SearchForm from './SearchForm';

import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loadImages, loadVideos } from '../../redux/thunk/thunk';
import { changePage } from '../../redux/actions/actions';


const Overlay = ({ section, LoadThePage, LoadMainImages, startSearchingVideos }) => {

    let history = useHistory();
    useEffect(() => {
        console.log(section);
        if (!section.back && !section.video) {
            history.push("/");
            LoadThePage("all");
            LoadMainImages("all", "", 1);

        } else if (section.category === "videos") {
            LoadThePage(section.category);
            startSearchingVideos("");
        } else {
            LoadThePage(section.category);
            LoadMainImages(section.category, "", 1);
        }




    }, []);

    return (
        <SearchHolder img={section.back}>
            <h1 className="main-title">
                {section.title || section.all.title}
            </h1>
            <p className="desc">
                {section.dec || section.all.dec}
            </p>

            <SearchForm
                section={section}
                startSearchingImages={LoadMainImages}
                startSearchingVideos={startSearchingVideos}
            />
            {section.video &&
                <video className="video" autoPlay muted loop >
                    <source src={section.video} type="video/mp4" />
                    <source src={section.video} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
            }
        </SearchHolder >
    )
}

const mapStateToProps = state => ({
    section: state.nav,
})
const MapDispatchToProps = dispatch => ({
    LoadThePage: (page) => dispatch(changePage(page)),
    LoadMainImages: (kind, key, page) => dispatch(loadImages(kind, key, page)),
    startSearchingVideos: searchKey => dispatch(loadVideos(searchKey)),

})

export default connect(mapStateToProps, MapDispatchToProps)(Overlay);




















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