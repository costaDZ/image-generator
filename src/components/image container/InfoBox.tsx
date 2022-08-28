import React, { MouseEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import { AppDispatch, RootState } from '../../redux/store';
import { handelLikedImages, addToCollection } from '../../redux/actions/actions';
import { InfoBox as InfoBoxContainer } from './infoBox.styles';

interface InfoBoxContainerProps extends PropsFromRedux {
  id: number;
  data: Hit;
  videos: Videos;
  tags: string;
  kind: 'video' | 'image';
  duration: number | undefined;
  likes: number;
  currentLocation: string;
  LoadMainImages: (kind: string, key: string, page: number, perpage: number) => void;
  startSearchingVideos: (kind: string, searchKey: string, page: number, perpage: number) => void;
  comments: number;
  goToDownload: (item: Hit) => void;
}

const InfoBox: React.FC<InfoBoxContainerProps> = ({
  id,
  data,
  videos,
  tags,
  kind,
  duration,
  likes,
  currentLocation,
  LoadMainImages,
  startSearchingVideos,
  toggelLike,
  likedItems,
  toggleCollection,
  goToDownload,
  collectionItems,
  comments
}: InfoBoxContainerProps) => {
  const history = useHistory().location.pathname;

  function startSearch(e: MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;
    const valueKeySearch = target.textContent || '';
    const searchAmount = history.slice(1, 9) === 'download' ? 8 : 50;

    switch (kind) {
      case 'video':
        startSearchingVideos('all', valueKeySearch, 1, searchAmount);
        break;
      default:
        LoadMainImages(currentLocation, valueKeySearch, 1, searchAmount);
        break;
    }
  }

  const checkItems = likedItems.find((item: Hit) => item.id === id);
  const collection = collectionItems.hits.find((item: Hit) => item.id === id);

  return (
    <InfoBoxContainer data-url={videos && videos.medium.url} k={kind} className="info_box">
      {(checkItems || collection) && history === '/collection' ? null : (
        <div className="tags">
          {tags
            .replace(/\s/g, '')
            .split(',')
            .map((tag: string, i: number) => {
              return (
                <button key={i} onClick={(e) => startSearch(e)}>
                  {tag}
                </button>
              );
            })}
        </div>
      )}

      <div className="likes_comments">
        {kind === 'video' ? (
          <div className="quality_diration">
            <p>0:{duration}</p>
            <b>4K</b>
            <button
              title={checkItems ? 'Add to my collection' : 'Remove from my collection'}
              onClick={() => toggleCollection(data)}>
              {collection ? (
                <i className="bi bi-dash-square-fill"></i>
              ) : (
                <i className="bi bi-plus-square"></i>
              )}
            </button>
          </div>
        ) : (
          <>
            <div className="likes">
              <button title={checkItems ? 'dislike' : 'Like'} onClick={() => toggelLike(data)}>
                {checkItems ? (
                  <i className="bi bi-hand-thumbs-up-fill"></i>
                ) : (
                  <i className="bi bi-hand-thumbs-up"></i>
                )}
              </button>

              <p>{checkItems ? likes + 1 : likes}</p>
            </div>

            <div className="comments">
              <Link to={`/download/${id}`} onClick={() => goToDownload(data)}>
                <i className="bi bi-chat-dots"></i>
              </Link>
              <p>{comments}</p>
            </div>

            <div className="collections">
              <button
                title={checkItems ? 'Add to my collection' : 'Remove from my collection'}
                onClick={() => toggleCollection(data)}>
                {collection ? (
                  <i className="bi bi-dash-square-fill"></i>
                ) : (
                  <i className="bi bi-plus-square"></i>
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </InfoBoxContainer>
  );
};

const mapStateToProps = (state: RootState) => ({
  likedItems: state.likedItem,
  collectionItems: state.myCollection
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  toggelLike: (item: Hit) => dispatch(handelLikedImages(item)),
  toggleCollection: (item: Hit) => dispatch(addToCollection(item))
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(InfoBox);
