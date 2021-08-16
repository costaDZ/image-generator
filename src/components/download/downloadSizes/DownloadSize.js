import React from 'react'
import styled from 'styled-components';
import { BigBtn } from '../../../styles/components';



function DownloadSize() {
    return (
        <DownloadSizeStyles>
            <input type="radio" id="small" name="resolution" value="small" />
            <label for="small">500 * 400   &emsp;&emsp;&emsp;20KB&emsp;&emsp;JPG</label><br />

            <input type="radio" id="large" name="resolution" value="large" />
            <label for="large">1000*3000 &emsp;&emsp;60KB &emsp;&emsp; JPG</label><br />

            <BigBtn type="submit">Download</BigBtn>
        </DownloadSizeStyles>
    )
}

export default DownloadSize;

const DownloadSizeStyles = styled.form`
    background-color: black;
    color: white;
    position: absolute;
    top: 9.6em;
    width: 80%;
    line-height: 3;
    padding: .5em;
    text-align: center;
    border-radius: 20px;

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
    /* label {
        padding: .5em  0;
    } */
`;
