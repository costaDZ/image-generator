import { useState } from 'react';

import { DownloadSizeStyles } from './DownloadSize.styles';
import { BigBtn } from '../../../styles/components';
import { downloadVideo, startDownload } from '../../../utils/helpers';
import { RadioInput } from './RadioInput';
import { InputLabel } from './InputLabel';

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
        <RadioInput
          id="small"
          action={() => setdownloadSrc(targetType === 'video' ? info.tinyUrl : info.mediumUrl)}
        />

        <InputLabel
          htmlFor="small"
          resolution={normalResolution}
          size={+targetSize.slice(0, 3) / 2 + ' MB'}
          extention={extention}
        />

        <RadioInput
          id="large"
          action={() => setdownloadSrc(targetType === 'video' ? info.smallUrl : info.largeUrl)}
        />

        <InputLabel
          htmlFor="large"
          resolution={bigResolution}
          size={targetSize}
          extention={extention}
        />

        <BigBtn className="pre" type="submit">
          Download
        </BigBtn>
      </form>
    </DownloadSizeStyles>
  );
};

export default DownloadSize;
