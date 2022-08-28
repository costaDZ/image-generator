import React from 'react';
import styled from 'styled-components';
import { connect, ConnectedProps } from 'react-redux';

import ImageContainer from './ImageContainer';
import { RootState, ThunkDispatchType } from '../../redux/store';
import { loadImages, loadVideos } from '../../redux/thunk/thunk';
import { addToDownload } from '../../redux/actions/downloadActions';

interface ImagesHolderProps {
  kind?: string;
  content: Content;
  collection: MyCollection;
}

const ImagesHolder: React.FC<ImagesHolderProps & PropsFromRedux> = ({
  content,
  kind,
  collection,
  LoadMainImages,
  startSearchingVideos,
  goToDownload
}: ImagesHolderProps & PropsFromRedux) => {
  const data: MyCollection | Content = kind === 'myCollection' ? collection : content;

  return (
    <ImagesContainerStyles>
      {data.hits?.map((item: Hit) => {
        return (
          <ImageContainer
            kind={kind ? content.kind : ''}
            key={item.id}
            isLoading={false}
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

const mapStateToProps = (state: RootState) => ({
  content: state.content,
  collection: state.myCollection
});

const MapDispatchToProps = (dispatch: ThunkDispatchType) => ({
  LoadMainImages: (kind: string, key: string, page: number, perpage: number) =>
    dispatch(loadImages(kind, key, page, perpage)),
  startSearchingVideos: (kind: string, searchKey: string, page: number, perpage: number) =>
    dispatch(loadVideos(kind, searchKey, page, perpage)),
  goToDownload: (item: Hit) => dispatch(addToDownload(item))
});

const connector = connect(mapStateToProps, MapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ImagesHolder);

const ImagesContainerStyles = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 10px 15px 0 10px;
  margin: 0.2em;
`;
