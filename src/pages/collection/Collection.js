import React from 'react';
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
