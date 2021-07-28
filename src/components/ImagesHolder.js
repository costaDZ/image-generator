import React from 'react';
import styled from 'styled-components';
import ImageContainer from './ImageContainer';


function ImagesHolder({ data, kind }) {

    if (kind === 'videos') {
        return (
            <ImagesContainerStyles>
                {data.pic?.hits.map((v, i) => {
                    const { picture_id, id, duration, tags, videos } = v;
                    let src = `https://i.vimeocdn.com/video/${picture_id}_640x360.jpg`;

                    return (
                        <ImageContainer
                            id={id}
                            webformatURL={src}
                            kind={kind}
                            duration={duration}
                            tags={tags}
                            videos={videos}
                            key={i}
                        />
                    )
                })}
            </ImagesContainerStyles>
        )
    } else {
        return (
            <ImagesContainerStyles>
                {
                    data.pic?.hits.map(img => {
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
                                isLoading={data.isLoading}
                            />
                        )
                    })}
            </ImagesContainerStyles>
        )
    }

}

const ImagesContainerStyles = styled.section`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 10px 15px 0 10px;


`

export default ImagesHolder;


// {
//     !data.isLoading ?
//     data.pic.hits.map(img => {
//         const {
//             id,
//             likes,
//             comments,
//             largeImageURL,
//             tags,
//             webformatURL,
//             webformatWidth,
//             webformatHeight,
//             downloads,
//         } = img;
//         return (
//             <ImageContainer
//                 id={id}
//                 likes={likes}
//                 tags={tags}
//                 comments={comments}
//                 webformatURL={webformatURL}
//                 isLoading={data.isLoading}
//             />
//         )
//     }) :
//     <h1>Loading ...</h1>
// }