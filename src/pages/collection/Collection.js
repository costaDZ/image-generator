import React from 'react';
import styled from 'styled-components';

import {
    ImagesHolder,
    StatusCollectionBar
} from '../../components';


function Collection() {
    return (
        <div>
            <ImagesHolder kind={"myCollection"} />
            <StatusCollectionBar />
        </div>
    )
}

export default Collection;

const CollectionStyled = styled.section`
    padding: 2em 0;

`;
