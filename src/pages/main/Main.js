import React, { useEffect } from 'react';
//import styled from 'styled-components';
import { ImagesHolder } from '../../components';

import { loadImages } from '../../redux/thunk/thunk';

import { connect } from 'react-redux';



function Main({ startLoadingImages, getImages }) {

    useEffect(() => {
        startLoadingImages();
    }, []);


    return (
        <ImagesHolder data={getImages} />
    )
}

const mapStateToProps = (state) => ({
    getImages: state.main,
})

const mapDispatchToProps = dispatch => ({
    startLoadingImages: () => dispatch(loadImages("", 1)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Main);

