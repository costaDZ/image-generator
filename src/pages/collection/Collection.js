import React from 'react';
import styled from 'styled-components';

import {
    ImagesHolder,
    StatusCollectionBar
} from '../../components';


function Collection() {
    return (
        <CollectionStyled>
            <ImagesHolder kind={"myCollection"} />
            <StatusCollectionBar />
        </CollectionStyled>
    )
}

export default Collection;

const CollectionStyled = styled.section`
    padding: 6em 0;
`;
