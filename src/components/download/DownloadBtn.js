import React from 'react'
import styled from 'styled-components';
import { BigBtn } from '../../styles/components';


import DownloadSize from './downloadSizes/DownloadSize';

function DownloadBtn({
    toggleDownloadSizes,
    sizes,
    smallWidth,
    smallHeight,
    largeWidth,
    largeHeight,
    extention,
}) {
    return (
        <DownloadBtnStyles>
            <BigBtn
                className="download_btn"
                onClick={() => toggleDownloadSizes("toggle")}
            >
                <i class="bi bi-download"></i> Free Download
            </BigBtn>
            <DownloadSize
                sizes={sizes}
                smallWidth={smallWidth}
                smallHeight={smallHeight}
                largeWidth={largeWidth}
                largeHeight={largeHeight}
                extention={extention}
            />
        </DownloadBtnStyles>
    )
}



export default DownloadBtn;

const DownloadBtnStyles = styled.div`
    height: 15em;
   // background: aqua;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    .download_btn {
        font-size: 1.5em;
    }

`;
