import React from 'react';
import styled from 'styled-components';
import ImageContainer from './ImageContainer';

import { connect } from 'react-redux';


function ImagesHolder({ images, kind }) {


    let data = images[kind].pic?.hits;

    // return (
    //     <h1>Hello test</h1>
    // )

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
                        />
                    )
                })}
        </ImagesContainerStyles>
    )
}


const mapStateToProps = state => ({
    images: state,
});

export default connect(mapStateToProps)(ImagesHolder);


const ImagesContainerStyles = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 10px 15px 0 10px;
    margin: 0.2em;
`;



