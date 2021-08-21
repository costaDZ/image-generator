import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { ImagesHolder, StatusCollectionBar } from '../../components';


function Collection() {
    const products = useSelector((state) => state.myCollection);
    let total = products.photo + products.vector + products.illustration + products.video;
    return (
        <CollectionStyled>
            {!total ?
                <h2>Your collection is empty !!!</h2>
                :
                <ImagesHolder kind={"myCollection"} />
            }
            <StatusCollectionBar />
        </CollectionStyled>
    )
}
export default Collection;

const CollectionStyled = styled.section`
    padding: 6em 0;
    h2 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 3vw;
        color: var(--grey-text);
        width: 100%;
        text-align: center;

        @media (max-width: 768px) {
            font-size: 2em;
        }
    }
`;
