import React, { useEffect } from 'react';
import styled from 'styled-components';

import SearchForm from './SearchForm';

import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loadImages, loadVideos } from '../../redux/thunk/thunk';
import { changePage, toggelMenu } from '../../redux/actions/actions';

const Overlay = ({
    section,
    LoadThePage,
    LoadMainImages,
    startSearchingVideos,
    closeMenu
}) => {
    let history = useHistory();
    useEffect(() => {
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
        <SearchHolder
            img={section.back}
            onClick={() => closeMenu('close')}
        >
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
});

const MapDispatchToProps = dispatch => ({
    LoadThePage: (page) => dispatch(changePage(page)),
    LoadMainImages: (kind, key, page) => dispatch(loadImages(kind, key, page)),
    startSearchingVideos: searchKey => dispatch(loadVideos(searchKey)),
    closeMenu: dir => dispatch(toggelMenu(dir)),
});

export default connect(mapStateToProps, MapDispatchToProps)(Overlay);



const SearchHolder = styled.section`
    position: relative;
    overflow-y: hidden;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-height: 70vh;
    color: white;
    background : url(${props => props.img}) center/cover no-repeat;

    @media(max-width: 768px) {
            min-height: 100vh;
        }

    .main-title {
        font-size: 2.5em;

        @media(max-width: 768px) {
            font-size: 2em;
            margin-top: 3em;
        }
    }

    video {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        min-height: 100%;
        min-width: 100%;
        width: auto;
        z-index: -1;
    }
`;
