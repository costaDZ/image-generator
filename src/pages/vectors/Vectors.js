import React from 'react';

import { loadVectors } from '../../redux/thunk/thunk';

import { connect } from 'react-redux';
import { useEffect } from 'react';

import { ImagesHolder } from '../../components';

function Vectors({ startLoadingVectors, getVectors }) {

    useEffect(() => {
        startLoadingVectors();
        console.log(getVectors);
    }, [])

    return (
        <ImagesHolder data={getVectors} />
    )
}


const mapStateToProps = (state) => ({
    getVectors: state.vectors,
})

const mapDispatchToProps = dispatch => ({
    startLoadingVectors: () => dispatch(loadVectors())
})


export default connect(mapStateToProps, mapDispatchToProps)(Vectors);