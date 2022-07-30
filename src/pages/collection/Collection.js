import React from 'react';
import { useSelector } from 'react-redux';
import { ImagesHolder, StatusCollectionBar } from '../../components';
import {CollectionStyled} from './collection.style';


function Collection() {
    const products = useSelector((state) => state.myCollection);
    const total = products.photo + products.vector + products.illustration + products.video;
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

