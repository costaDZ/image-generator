import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

interface StatusCollectionBarProps {
  collectedPhotos: any;
  collectedVectors: any;
  collectedIllistrations: any;
  collectedVideos: any;
}

const StatusCollectionBar: React.FC = ({
  collectedPhotos,
  collectedVectors,
  collectedIllistrations,
  collectedVideos
}: StatusCollectionBarProps) => {
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

const mapStateToProps = (state: any) => ({
  collectedPhotos: state.myCollection.photo,
  collectedVectors: state.myCollection.vector,
  collectedIllistrations: state.myCollection.illustration,
  collectedVideos: state.myCollection.video
});

export default connect(mapStateToProps)(StatusCollectionBar);

const StatusBarStyled = styled.div`
  background-color: var(--green-color);
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 5;
  font-size: 0.8em;

  ul {
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    padding: 0;

    h4 {
      margin: 0.3em;
      display: inline-block;
      background: white;
      border-radius: 40px;
      padding: 0.2em 0.5em;
    }

    li {
      font-weight: 700;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`;
