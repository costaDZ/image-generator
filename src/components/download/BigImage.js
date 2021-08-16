import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Loader from '../Loader';


function BigImageView({ large, normal }) {

    const [loader, setLoader] = useState(true);
    useEffect(() => {
        let loaderTrigger = setTimeout(() => {
            setLoader(false);
        }, 2000);
        return () => clearTimeout(loaderTrigger);
    }, []);

    return (

        <BigImageStyles>
            {loader ? <Loader /> :
                <>
                    <source media="(min-width:650px)" srcSet={large} />
                    <img src={normal} alt="Flowers" />
                </>
            }
        </BigImageStyles>
    )
}


export default BigImageView;

const BigImageStyles = styled.picture`

    display: inline-block;
    width: 70%;

    img {
        width: 100%;
        height: 100%;
    }
`;
