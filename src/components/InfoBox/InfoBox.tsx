import React, { MouseEvent } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { connector } from './infoBox.selectors';

import { InfoBox as InfoBoxContainer } from './infoBox.styles';
import { InfoBoxContainerProps } from './infoBox.types';

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

  const startSearch = (e: MouseEvent<HTMLButtonElement>) => {
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
  };

  const checkItems = likedItems.find((item: Hit) => item.id === id);
  const collection = collectionItems.hits.find((item: Hit) => item.id === id);

  return (
    <InfoBoxContainer data-url={videos && videos.medium.url} k={kind} className="info_box">
      {(checkItems || collection) && history === '/collection' ? null : (
        <TagsHolder tags={tags} startSearch={startSearch} />
      )}

      <div className="likes_comments">
        {kind === 'video' ? (
          <VideosHolder
            duration={duration}
            checkItems={checkItems}
            collection={collection}
            toggleCollection={toggleCollection}
            data={data}
          />
        ) : (
          <ImageHolder
            checkItems={checkItems}
            collection={collection}
            toggleCollection={toggleCollection}
            data={data}
            toggelLike={toggelLike}
            likes={likes}
            id={id}
            goToDownload={goToDownload}
            comments={comments}
          />
        )}
      </div>
    </InfoBoxContainer>
  );
};

type TagsHolderProps = {
  tags: string;
  startSearch: (e: MouseEvent<HTMLButtonElement>) => void;
};

const TagsHolder = ({ tags, startSearch }: TagsHolderProps) => {
  return (
    <div className="tags">
      {tags
        .replace(/\s/g, '')
        .split(',')
        .map((tag: string, i: number) => {
          return (
            <button key={i} onClick={startSearch}>
              {tag}
            </button>
          );
        })}
    </div>
  );
};

type VideosHolderProps = {
  duration: number | undefined;
  checkItems: Hit | undefined;
  collection: Hit | undefined;
  toggleCollection: (argument: Hit) => void;
  data: Hit;
};

const VideosHolder = ({
  duration,
  checkItems,
  collection,
  toggleCollection,
  data
}: VideosHolderProps) => {
  return (
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
  );
};

type ImageHolderProps = {
  checkItems: Hit | undefined;
  collection: Hit | undefined;
  toggleCollection: (argument: Hit) => void;
  data: Hit;
  toggelLike: (argument: Hit) => void;
  likes: number;
  id: number;
  goToDownload: (argument: Hit) => void;
  comments: number;
};

const ImageHolder = ({
  checkItems,
  collection,
  toggleCollection,
  data,
  toggelLike,
  likes,
  id,
  goToDownload,
  comments
}: ImageHolderProps) => {
  return (
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
  );
};

export default connector(InfoBox);
