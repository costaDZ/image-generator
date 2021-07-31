import React from 'react';
import styled from 'styled-components';

import SearchForm from '../SearchForm';

import { connect } from 'react-redux';

const Overlay = ({ section }) => {
    return (
        <SearchHolder img={section.back}>
            <h1 className="main-title">
                {section.title}
            </h1>
            <p className="desc">
                {section.dec}
            </p>

            <SearchForm section={section} />

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