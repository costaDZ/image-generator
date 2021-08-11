import React from 'react';
import styled from 'styled-components';

function Loader() {
    return (
        <LoaderStyle >
            <div className="loader-p">
            </div>
        </LoaderStyle>
    )
}

export default Loader;


const LoaderStyle = styled.div`
 /*CUSTOM PRELOADER*/
            background: #fff;
            width: 22em;
            height: 20em;
            display: flex;
            align-items: center;
            justify-content: center;
        
        .loader-p{
        border: 0 solid transparent;
        border-radius: 50%;
        width: 150px;
        height: 150px;
        }

        .loader-p:before, .loader-p:after{
        content: '';
        border: 1em solid #15e38a;
        border-radius: 50%;
        width: inherit;
        height: inherit;
        position: absolute;
        animation: loader 2s linear infinite;
        opacity: 0;
        }

        .loader-p:before{
        animation-delay: 0.5s;
        }

        @keyframes loader{
        0%{
            transform: scale(0);
            opacity: 0;
        }
        50%{
            opacity: 1;
        }
        100%{
            transform: scale(1);
            opacity: 0;
        }
        }
        /*end of custom preloader*/

`