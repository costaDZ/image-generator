import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { handelLikedImages, addToCollection } from '../../redux/actions/actions';

interface InfoBoxContainerProps {
  id: any;
  data: any;
  videos: any;
  tags: any;
  kind: any;
  duration: any;
  likes: any;
  currentLocation: any;
  LoadMainImages: any;
  startSearchingVideos: any;
  toggelLike: any;
  likedItems: any;
  toggleCollection: any;
  collectionItems: any;
  goToDownload: any;
}

const InfoBoxContainer: React.FC<InfoBoxContainerProps> = ({
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
  collectionItems,
  goToDownload
}: InfoBoxContainerProps) => {
  const history = useHistory().location.pathname;

  function startSearch(e: any) {
    const valueKeySearch = e.target.textContent;
    const searchAmount = history.slice(1, 9) === 'download' ? 8 : 50;

    console.log(kind, searchAmount);
    switch (kind) {
      case 'video':
        startSearchingVideos('all', valueKeySearch, 1, searchAmount);
        break;
      default:
        LoadMainImages(currentLocation, valueKeySearch, 1, searchAmount);
        break;
    }
  }

  const checkItems = likedItems.find((item: any) => item.id === id);
  const collection = collectionItems.hits.find((item: any) => item.id === id);

  return (
    <InfoBox data-url={videos && videos.medium.url} k={kind} className="info_box">
      {(checkItems || collection) && history === '/collection' ? null : (
        <div className="tags">
          {tags
            .replace(/\s/g, '')
            .split(',')
            .map((tag: string, i: string) => {
              return (
                <button key={i} onClick={(e) => startSearch(e)}>
                  {tag}
                </button>
              );
            })}
        </div>
      )}

      <div className="likes_comments">
        {kind === 'videos' ? (
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

            {/* <div className="comments">
                            <Link to={`/download/${id}`} onClick={() => goToDownload(img)}>
                                <i className="bi bi-chat-dots"></i>
                            </Link>
                            <p>{comments}</p>
                        </div> */}

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
    </InfoBox>
  );
};

const mapStateToProps = (state: any) => ({
  likedItems: state.likedItem,
  collectionItems: state.myCollection
});

const mapDispatchToProps = (dispatch: any) => ({
  toggelLike: (item: any) => dispatch(handelLikedImages(item)),
  toggleCollection: (item: any) => dispatch(addToCollection(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoBoxContainer);

interface IndoBoxProps {
  k: string;
}

const InfoBox = styled.div<IndoBoxProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  position: absolute;
  opacity: ${(props) => (props.k === 'video' ? 1 : 0)};
  color: var(--white-color);
  bottom: 0;
  background: linear-gradient(0deg, rgb(0 0 0 / 90%) 0, transparent);
  width: 100%;
  ${(props) => (props.k !== 'video' ? ' @media (max-width: 768px) {opacity: 1;}' : '')}
  .tags {
    display: flex;
    padding: 1em 0;
    position: relative;
    z-index: 3;
    button {
      background-color: transparent;
      font-weight: 700;
      color: var(--white-color);
      border: none;
      transition: var(--transition);
      cursor: pointer;
      border-radius: 8px;

      &:hover {
        background-color: #ffffff70;
      }
    }
  }

  .likes_comments,
  .likes,
  .comments,
  .quality_diration {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0.5em;
    position: relative;
    z-index: 3;
    p {
      margin-left: 0.2em;
    }
    b {
      margin-left: 0.7em;
    }
    a {
      color: white;
    }
    button {
      background-color: transparent;
      outline: none;
      border: none;
      color: white;
      font-size: 1em;

      .bi-hand-thumbs-up-fill,
      .bi-dash-square-fill {
        color: var(--green-color);
      }
    }

    i {
      font-size: 1.5em;

      &:hover {
        color: var(--green-color);
        cursor: pointer;
      }
    }
  }
`;