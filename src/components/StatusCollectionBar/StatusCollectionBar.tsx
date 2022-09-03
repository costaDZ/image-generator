import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../redux/store';
import { StatusBarStyled } from './StatusCollectionBar.styles';

const StatusCollectionBar: React.FC<PropsFromRedux> = ({
  collectedPhotos,
  collectedVectors,
  collectedIllistrations,
  collectedVideos
}: PropsFromRedux) => {
  const total = collectedPhotos + collectedVectors + collectedIllistrations + collectedVideos;
  return (
    <StatusBarStyled>
      <ul>
        <h4>Total collection : {total}</h4>
        <li>photos : {collectedPhotos}</li>
        <li>vector : {collectedVectors}</li>
        <li>illustration: {collectedIllistrations}</li>
        <li>videos: {collectedVideos}</li>
      </ul>
    </StatusBarStyled>
  );
};

const mapStateToProps = (state: RootState) => ({
  collectedPhotos: state.myCollection.photo,
  collectedVectors: state.myCollection.vector,
  collectedIllistrations: state.myCollection.illustration,
  collectedVideos: state.myCollection.video
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(StatusCollectionBar);
