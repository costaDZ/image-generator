import React, { useState } from 'react'
import styled from 'styled-components';
import { BigBtn } from '../../../styles/components';


function DownloadSize({
    targetType,
    info,
}) {

    const [downloadSrc, setdownloadSrc] = useState("");

    console.log(downloadSrc);

    async function startDownload(src) {
        const target = await fetch(src);
        const imageBlog = await target.blob();
        const imageURL = URL.createObjectURL(imageBlog);
        const link = document.createElement('a')
        link.href = imageURL
        link.download = imageBlog.type;
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    function downloadVideo(src) {
        const link = document.createElement('a')
        link.href = src;
        link.download = "video";
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const { extention, sizes, targetSize, bigResolution, normalResolution } = info;


    return (
        <DownloadSizeStyles
            className="pre"
            style={{ display: sizes ? "block" : false }}
        >
            <form onSubmit={(e) => {
                e.preventDefault();
                (targetType === "video") ? downloadVideo(downloadSrc) : startDownload(downloadSrc);
                setdownloadSrc("")
            }}>
                <input
                    type="radio"
                    id="small"
                    name="resolution"
                    //checked={downloadSrc}
                    required
                    onClick={
                        () => setdownloadSrc(targetType === "video"
                            ? info.tinyUrl
                            : info.mediumUrl)
                    }
                />
                <label
                    className="pre"
                    htmlFor="small">
                    {normalResolution}
                    &emsp;&emsp;&emsp;
                    {targetSize.slice(0, 3) / 2 + " MB"}
                    &emsp;&emsp;
                    {extention}
                </label>
                <br />

                <input
                    type="radio"
                    id="large"
                    name="resolution"
                    //   checked={downloadSrc}
                    required
                    onClick={
                        () => setdownloadSrc(targetType === "video"
                            ? info.smallUrl
                            : info.largeUrl)
                    }
                />

                <label
                    className="pre"
                    htmlFor="large"
                >
                    {bigResolution}
                    &emsp;&emsp;
                    {targetSize}
                    &emsp;&emsp;
                    {extention}
                </label>

                <br />
                <BigBtn className="pre" type="submit" >Download</BigBtn>
            </form>

        </DownloadSizeStyles>
    )
}

export default DownloadSize;

const DownloadSizeStyles = styled.div`
    position: absolute;
   // width: 100%;
    top: 6.5em;
    min-width: 18em;
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

        input {
            cursor: pointer;
        }
    }

    ::before {
            content: "";
            border-style: solid;
            border-width: 8px;
            border-color: transparent transparent #0a0909 transparent;
            height: 0;
            width: 0;
            position: absolute;
            bottom: 10em;
            left: 60px;
    }

    button {
        width: 80%;
        margin: auto;
        width: 80%;
        display: block;
        margin: auto;
    }

`;
