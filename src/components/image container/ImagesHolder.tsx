import React from 'react';
import styled from 'styled-components';
import ImageContainer from './ImageContainer';

import { connect } from 'react-redux';

import { loadImages, loadVideos } from '../../redux/thunk/thunk';
import { addToDownload } from '../../redux/actions/downloadActions';

interface ImagesHolderProps {
  content?: any;
  kind?: any;
  collection?: any;
  LoadMainImages?: any;
  startSearchingVideos?: any;
  goToDownload?: any;
}

const ImagesHolder: React.FC<ImagesHolderProps> = ({
  content,
  kind,
  collection,
  LoadMainImages,
  startSearchingVideos,
  goToDownload
}: ImagesHolderProps) => {
  const data = kind === 'myCollection' ? collection : content;
  return (
    <ImagesContainerStyles>
      {data.hits?.map((item: any) => {
        return (
          <ImageContainer
            kind={content.kind}
            key={item.id}
            isLoading={content.isLoading}
            data={item}
            LoadMainImages={LoadMainImages}
            startSearchingVideos={startSearchingVideos}
            goToDownload={goToDownload}
          />
        );
      })}
    </ImagesContainerStyles>
  );
};

const mapStateToProps = (state: any) => ({
  content: state.content,
  collection: state.myCollection
});

const MapDispatchToProps = (dispatch: any) => ({
  LoadMainImages: (kind: any, key: any, page: any, perpage: any) =>
    dispatch(loadImages(kind, key, page, perpage)),
  startSearchingVideos: (kind: any, searchKey: any, page: any, perpage: any) =>
    dispatch(loadVideos(kind, searchKey, page, perpage)),
  goToDownload: (item: any) => dispatch(addToDownload(item))
});

export default connect(mapStateToProps, MapDispatchToProps)(ImagesHolder);

const ImagesContainerStyles = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 10px 15px 0 10px;
  margin: 0.2em;
`;