import React from 'react';

import { loadIllistrator } from '../../redux/thunk/thunk';

import { connect } from 'react-redux';

import { useEffect } from 'react';

import { ImagesHolder } from '../../components';

function Illistrations({ startLoadingIllistrators, getIllistrators }) {

    useEffect(() => {
        startLoadingIllistrators();
    }, [])




    return (
        <ImagesHolder data={getIllistrators} />
    )
}


const mapStateToProps = (state) => ({
    getIllistrators: state.illistrator,
})

const mapDispatchToProps = dispatch => ({
    startLoadingIllistrators: () => dispatch(loadIllistrator())
})


export default connect(mapStateToProps, mapDispatchToProps)(Illistrations);