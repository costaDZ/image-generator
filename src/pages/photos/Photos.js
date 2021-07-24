import React from 'react';

import { loadPhotos } from '../../redux/thunk/thunk';

import { connect } from 'react-redux';
import { useEffect } from 'react';

import { ImagesHolder } from '../../components';


function Photos({ getPhotos, startLoadingPhotos }) {

    useEffect(() => {
        startLoadingPhotos();
        console.log(getPhotos);
    }, [])


    return (
        <ImagesHolder data={getPhotos} />
    )
}


const mapStateToProps = (state) => ({
    getPhotos: state.photos,
})

const mapDispatchToProps = dispatch => ({
    startLoadingPhotos: () => dispatch(loadPhotos())
})


export default connect(mapStateToProps, mapDispatchToProps)(Photos);