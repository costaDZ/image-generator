import React, { useEffect } from 'react';
import styled from 'styled-components';

import { loadImages } from '../../redux/thunk/thunk';

import { connect } from 'react-redux';


function Main({ startLoadingImages, getImages }) {

    useEffect(() => {
        console.log(getImages);
        // startLoadingImages();
        // console.log(getImages);
        //   console.log(getImages);

    }, []);


    return (
        <ImagesContainerStyles>
            {/* {getImages.images.hits.map(img => {
                const {
                    id,
                    likes,
                    comments,
                    largeImageURL,
                    tags,
                    webformatURL,
                    webformatWidth,
                    webformatHeight,
                    downloads,
                } = img;
                return (
                    <img key={id} src={webformatURL} alt={tags} />
                )
            })} */}
        </ImagesContainerStyles>
    )
}

const mapStateToProps = (state) => ({
    getImages: state.images,
    isLoading: state.isLoading
})

// const mapDispatchToProps = dispatch => ({
//     startLoadingImages: () => dispatch(loadImages()),
// })


export default connect(mapStateToProps)(Main);


const ImagesContainerStyles = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    justify-content: center;
    align-items: center;
    gap: 2em;

`