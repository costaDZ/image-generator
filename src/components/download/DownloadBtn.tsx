import React from 'react';
import styled from 'styled-components';
import { BigBtn } from '../../styles/components';
import DownloadSize from './downloadSizes/DownloadSize';

interface DownloadBtnProps {
  toggleDownloadSizes: (event: string) => void;
  targetType?: any;
  info?: any;
}

const DownloadBtn: React.FC<DownloadBtnProps> = ({
  toggleDownloadSizes,
  targetType,
  info
}: DownloadBtnProps) => {
  return (
    <DownloadBtnStyles>
      <BigBtn className="download_btn pre" onClick={() => toggleDownloadSizes('toggle')}>
        <i className="bi bi-download"></i> Free Download
      </BigBtn>
      <DownloadSize
        //className="pre"
        targetType={targetType}
        info={info}
      />
    </DownloadBtnStyles>
  );
};

export default DownloadBtn;

const DownloadBtnStyles = styled.div`
  height: 9em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .download_btn {
    font-size: 1.5em;
  }
`;
