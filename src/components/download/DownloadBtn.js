import React from 'react'
import styled from 'styled-components';
import { BigBtn } from '../../styles/components';


import DownloadSize from './downloadSizes/DownloadSize';

function DownloadBtn({ toggleDownloadSizes }) {
    return (
        <DownloadBtnStyles>
            <BigBtn
                className="download_btn"
                onClick={() => toggleDownloadSizes("toggle")}
            >
                <i class="bi bi-download"></i> Free Download
            </BigBtn>
            <DownloadSize />
        </DownloadBtnStyles>
    )
}



export default DownloadBtn;

const DownloadBtnStyles = styled.div`
    height: 15em;
   // background: aqua;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .download_btn {
        font-size: 1.5em;
    }

`;
