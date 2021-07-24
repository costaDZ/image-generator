import React from 'react';
import styled from 'styled-components';
import ImageContainer from './ImageContainer';


function ImagesHolder({ data, kind }) {
    return (
        <ImagesContainerStyles>

            {console.log(data)}
            {!data.isLoading ?
                data.pic.hits.map(img => {
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
                        <ImageContainer
                            id={id}
                            likes={likes}
                            tags={tags}
                            comments={comments}
                            webformatURL={webformatURL}
                        />
                    )
                }) :
                <h1>Loading ...</h1>}
        </ImagesContainerStyles>
    )
}

const ImagesContainerStyles = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 10px 15px 0 10px;
`

export default ImagesHolder;
