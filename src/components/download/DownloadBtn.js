import React from 'react'
import styled from 'styled-components';
import { BigBtn } from '../../styles/components';


import DownloadSize from './downloadSizes/DownloadSize';

function DownloadBtn({
    toggleDownloadSizes,
    sizes,
    extention,
    mediumVideo,
    largeVideo,
    targetType,
    itemToDownload
}) {

    return (
        <DownloadBtnStyles >
            <BigBtn
                className="download_btn pre"
                onClick={() => toggleDownloadSizes("toggle")}
            >
                <i class="bi bi-download"></i> Free Download
            </BigBtn>
            <DownloadSize
                className="pre"
                itemToDownload={itemToDownload}
                targetType={targetType}
                sizes={sizes}
                extention={extention}
            />
        </DownloadBtnStyles>
    )
}



export default DownloadBtn;

const DownloadBtnStyles = styled.div`
    height: 15em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    .download_btn {
        font-size: 1.5em;
    }

`;
