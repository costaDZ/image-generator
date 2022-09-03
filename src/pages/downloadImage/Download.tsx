import React, { MouseEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { DownloadStyled } from './Downloads.styles';
import { toggleDownloadSizes } from '../../redux/actions/downloadActions';
import { ImagesHolder, BigImageView, DownloadBtn, UserInfo, ImageInfo } from '../../components';
import { RootState, AppDispatch } from '../../redux/store';

const Download: React.FC<PropsFromRedux> = ({
  toggleDownloadSizes,
  targetType,
  info
}: PropsFromRedux) => {
  return (
    <DownloadStyled onClick={closeSizes}>
      <div className="first_container">
        <BigImageView targetType={targetType} info={info} />
        <div className="side_bar">
          <UserInfo info={info} />
          <DownloadBtn
            targetType={targetType}
            toggleDownloadSizes={toggleDownloadSizes}
            info={info}
          />
          <ImageInfo {...info} />
        </div>
      </div>

      <div className="related_images">
        <h3>Discover More :</h3>
        <ImagesHolder />
      </div>
    </DownloadStyled>
  );
};

const mapStateToProps = (state: RootState) => ({
  info: state.download,
  targetType: state.download.type
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  toggleDownloadSizes: (action: string) => dispatch(toggleDownloadSizes(action))
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Download);

const closeSizes = (e: MouseEvent<HTMLElement>) => {
  const elm = e.target as HTMLElement;
  if (!elm.classList.contains('pre') && elm.tagName !== 'FORM' && elm.tagName !== 'INPUT') {
    toggleDownloadSizes('c');
  }
};
