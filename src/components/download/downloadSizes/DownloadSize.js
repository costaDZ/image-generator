import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { BigBtn } from '../../../styles/components';


function DownloadSize({
    sizes,
    extention,
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
        <DownloadSizeStyles
            className="pre"


            style={{ display: sizes ? "block" : false }}
        >

            <form onSubmit={(e) => {
                e.preventDefault();
                (targetType === "video") ? downloadVideo(downloadSrc) : startDownload(downloadSrc);
            }}>
                <input type="radio" id="small" name="resolution" value="small" required onClick={() => setdownloadSize("s")} />

                <label htmlFor="small">
                    {
                        `${itemToDownload.webformatWidth || itemToDownload.videos.small.width}
                     * 
                        ${itemToDownload.webformatHeight || itemToDownload.videos.small.height}`
                    }

                    &emsp;&emsp;&emsp;
                    {
                        targetType === "video"
                            ?
                            transferToMb(itemToDownload.videos.small.size)
                            :
                            Number(transferToMb(itemToDownload.imageSize).slice(0, 3)) / 2 + " MB"
                    }
                    &emsp;&emsp;
                    {extention && extention.toUpperCase()}
                </label>

                <br />

                <input type="radio" id="large" name="resolution" value="large" required onClick={() => setdownloadSize("l")} />
                <label htmlFor="large" >
                    {
                        `${itemToDownload.imageWidth || itemToDownload.videos.medium.width}
                     * 
                        ${itemToDownload.imageHeight || itemToDownload.videos.medium.height}`
                    }
                    &emsp;&emsp;
                    {targetType === "video"
                        ?
                        transferToMb(itemToDownload.videos.medium.size)
                        :
                        transferToMb(itemToDownload.imageSize)
                    }
                    &emsp;&emsp;
                    {extention && extention.toUpperCase()}
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

`;
