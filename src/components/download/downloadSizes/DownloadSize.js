import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { BigBtn } from '../../../styles/components';



function DownloadSize({
    sizes,
    smallWidth,
    smallHeight,
    largeWidth,
    largeHeight,
    extention,
    mediumVideo,
    largeVideo,
    imageSize,
    itemToDownload,
    targetType
}) {

    const [downloadSize, setdownloadSize] = useState("");
    const [downloadSrc, setdownloadSrc] = useState("");

    function transferToMb(num) {
        return (num / 1000000).toFixed(1) + " MB";
    }

    useEffect(() => {
        if (targetType === "video") {
            if (downloadSize === "s") {
                setdownloadSrc(itemToDownload.videos.medium.url);
            } else {
                setdownloadSrc(itemToDownload.videos.large.url);
            }
        } else {
            if (downloadSize === "s") {
                setdownloadSrc(itemToDownload.webformatURL);
            } else {
                setdownloadSrc(itemToDownload.largeImageURL);
            }
        }
        // eslint-disable-next-line
    }, [downloadSize, downloadSrc])



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


    return (
        <DownloadSizeStyles style={{ display: sizes ? "block" : false }}>

            <form onSubmit={(e) => {
                e.preventDefault();
                (targetType === "video") ? downloadVideo(downloadSrc) : startDownload(downloadSrc);
            }}>
                <input type="radio" id="small" name="resolution" value="small" required onClick={() => setdownloadSize("s")} />

                <label htmlFor="small">
                    {`${smallWidth || mediumVideo.width} * ${smallHeight || mediumVideo.height}`}
                    &emsp;&emsp;&emsp;
                    {mediumVideo ? transferToMb(mediumVideo.size) : Number(transferToMb(imageSize).slice(0, 3)) / 2 + " MB"}
                    &emsp;&emsp;
                    {extention && extention.toUpperCase()}
                </label>

                <br />

                <input type="radio" id="large" name="resolution" value="large" required onClick={() => setdownloadSize("l")} />
                <label htmlFor="large" >
                    {`${largeWidth || largeVideo.width} * ${largeHeight || largeVideo.height}`}
                    &emsp;&emsp;
                    {largeVideo ? transferToMb(largeVideo.size) : transferToMb(imageSize)}
                    &emsp;&emsp;
                    {extention && extention.toUpperCase()}
                </label>

                <br />
                <BigBtn type="submit" >Download</BigBtn>
            </form>

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

        input {
            cursor: pointer;
        }
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
