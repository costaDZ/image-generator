import React from 'react'
import styled from 'styled-components';
import { BigBtn } from '../../../styles/components';



function DownloadSize({
    sizes,
    smallWidth,
    smallHeight,
    largeWidth,
    largeHeight,
    extention,
}) {
    console.log(smallWidth);
    return (
        <DownloadSizeStyles style={{ display: sizes ? "block" : false }}>

            <form >
                <input type="radio" id="small" name="resolution" value="small" />
                <label htmlFor="small">{`${smallWidth} * ${smallHeight}`}  &emsp;&emsp;&emsp;20KB&emsp;&emsp;{extention && extention.toUpperCase()}</label><br />

                <input type="radio" id="large" name="resolution" value="large" />
                <label htmlFor="large">{`${largeWidth} * ${largeHeight}`} &emsp;&emsp;60KB &emsp;&emsp; {extention && extention.toUpperCase()}</label><br />
            </form>

            <BigBtn type="submit">Download</BigBtn>
        </DownloadSizeStyles>
    )
}

export default DownloadSize;

const DownloadSizeStyles = styled.div`
    position: absolute;
    width: 100%;
    top: 152px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: black;
  //  height: 100%;
    display: none;
    padding: .5em;


    form {
        color: white;
        position: relative;
        line-height: 3;
        padding: .5em;
        text-align: center;
    }

    /* .show {
        display: block;
    } */

    ::before {
            content: "";
            border-style: solid;
            border-width: 8px;
            border-color: transparent transparent #0a0909 transparent;
            height: 0;
            width: 0;
            position: absolute;
            bottom: 160px;
            left: 60px;
    }

    button {
        width: 80%;
        margin: auto;
        width: 80%;
        display: block;
        margin: auto;
    }
    /* label {
        padding: .5em  0;
    } */
`;
