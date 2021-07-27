import React from 'react';


import { loadVideos } from '../../redux/thunk/thunk';

import { connect } from 'react-redux';
import { useEffect } from 'react';

import { ImagesHolder } from '../../components';


function Videos({ startLoadVideos, getVideos }) {
    useEffect(() => {
        startLoadVideos();
    }, [])

    return (
        <ImagesHolder data={getVideos} kind={'videos'} isLoading={getVideos.isLoading} />
    )
}

const mapStateToProps = state => ({
    getVideos: state.videos,
});

const mapDispatchToProps = dispatch => ({
    startLoadVideos: () => dispatch(loadVideos())
});

export default connect(mapStateToProps, mapDispatchToProps)(Videos);