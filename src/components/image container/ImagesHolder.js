import React from 'react';
import styled from 'styled-components';
import ImageContainer from './ImageContainer';

import { connect } from 'react-redux';

import { loadImages, loadVideos } from '../../redux/thunk/thunk';

function ImagesHolder({ images, kind, LoadMainImages, startSearchingVideos }) {


    let data = images[kind].pic?.hits;

    return (
        <ImagesContainerStyles>
            {
                data?.map(item => {
                    const {
                        id,
                        likes,
                        comments,
                        largeImageURL,
                        tags,
                        webformatURL,
                        picture_id,
                        webformatWidth,
                        webformatHeight,
                        downloads,
                        duration,
                        videos
                    } = item;
                    let src = `https://i.vimeocdn.com/video/${picture_id}_640x360.jpg`;
                    return (
                        <ImageContainer
                            img={item}
                            kind={images[kind].kind}
                            duration={duration}
                            videos={videos}
                            picture_id={picture_id}
                            key={id}
                            id={id}
                            likes={likes}
                            tags={tags}
                            comments={comments}
                            webformatURL={webformatURL || src}
                            isLoading={data.isLoading}
                            LoadMainImages={LoadMainImages}
                            startSearchingVideos={startSearchingVideos}
                        />
                    )
                })}
        </ImagesContainerStyles>
    )
}


const mapStateToProps = state => ({
    images: state,
});

const MapDispatchToProps = dispatch => ({
    LoadMainImages: (kind, key, page, perpage) => dispatch(loadImages(kind, key, page, perpage)),
    startSearchingVideos: (searchKey, page, perpage) => dispatch(loadVideos(searchKey, page, perpage)),
});

export default connect(mapStateToProps, MapDispatchToProps)(ImagesHolder);


const ImagesContainerStyles = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 10px 15px 0 10px;
    margin: 0.2em;
`;



