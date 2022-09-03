import React, { useState } from 'react';

import { DownloadSizeStyles } from './DownloadSize.styles';
import { BigBtn } from '../../../styles/components';

interface DownloadSizeProps {
  targetType: string;
  info: Download;
  className: string;
}

const DownloadSize: React.FC<DownloadSizeProps> = ({ targetType, info }: DownloadSizeProps) => {
  const [downloadSrc, setdownloadSrc] = useState('');
  const { extention, sizes, targetSize, bigResolution, normalResolution } = info;

  const handelDownload = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    targetType === 'video' ? downloadVideo(downloadSrc) : startDownload(downloadSrc);
    setdownloadSrc('');
  };

  return (
    <DownloadSizeStyles className="pre" style={{ display: sizes ? 'block' : undefined }}>
      <form onSubmit={handelDownload}>
        <input
          type="radio"
          id="small"
          name="resolution"
          required
          onClick={() => setdownloadSrc(targetType === 'video' ? info.tinyUrl : info.mediumUrl)}
        />
        <label className="pre" htmlFor="small">
          {normalResolution}
          &emsp;&emsp;&emsp;
          {+targetSize.slice(0, 3) / 2 + ' MB'}
          &emsp;&emsp;
          {extention}
        </label>
        <br />

        <input
          type="radio"
          id="large"
          name="resolution"
          required
          onClick={() => setdownloadSrc(targetType === 'video' ? info.smallUrl : info.largeUrl)}
        />

        <label className="pre" htmlFor="large">
          {bigResolution}
          &emsp;&emsp;
          {targetSize}
          &emsp;&emsp;
          {extention}
        </label>

        <br />
        <BigBtn className="pre" type="submit">
          Download
        </BigBtn>
      </form>
    </DownloadSizeStyles>
  );
};

const startDownload = async (src: string) => {
  const target = await fetch(src);
  const imageBlog = await target.blob();
  const imageURL = URL.createObjectURL(imageBlog);
  const link = document.createElement('a');
  link.href = imageURL;
  link.download = imageBlog.type;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const downloadVideo = (src: string): void => {
  const link = document.createElement('a');
  link.href = src;
  link.download = 'video';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default DownloadSize;
