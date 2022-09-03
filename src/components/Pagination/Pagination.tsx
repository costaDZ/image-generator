import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ThunkDispatchType } from '../../redux/store';

import { RootState } from '../../redux/store';
import { loadImages, loadVideos } from '../../redux/thunk/thunk';
import { PaginationStyles } from './pagination-styles';

const Pagination = ({
  currentItems,
  currentLocation,
  startLoadPageImages,
  startLoadPageVideos
}: PropsFromRedux) => {
  const { kind, searchKey, pic, pageNumber, perPage, isLoading, total, totalHits } = currentItems;

  const changeThePage = (val: number) => {
    switch (currentLocation) {
      case 'videos':
        startLoadPageVideos(kind, searchKey, val, perPage);
        break;
      default:
        startLoadPageImages(kind, searchKey, val, perPage);
        break;
    }
  };

  return (
    !isLoading && (
      <PaginationStyles>
        <div className="left_box_info">
          {searchKey && <b>{total} </b>}
          Free <span>{kind === 'videos' ? 'Videos' : 'Images'}</span>
          {searchKey && (
            <span>
              {' '}
              of <span className="key_span">${searchKey}</span>{' '}
            </span>
          )}
        </div>

        <div className="right_box_info">
          <span className="current_page">{pageNumber}</span>
          <span className="total_passed_pages">
            {pageNumber === Math.ceil(totalHits / perPage)
              ? totalHits - (pageNumber - 1) * perPage + (pageNumber - 1) * perPage
              : pageNumber * perPage}
          </span>
          /<span className="total_pages">{pic ? totalHits : 500}</span>
          <button
            className={`left-row ${pageNumber === 1 ? 'desactive-btn' : 'active-btn'}`}
            onClick={() => pageNumber > 1 && changeThePage(pageNumber - 1)}>
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            className={`right-row ${
              pageNumber >= Math.ceil(totalHits / perPage) ? 'desactive-btn' : 'active-btn'
            }`}
            onClick={() =>
              pageNumber < Math.ceil(totalHits / perPage) && changeThePage(pageNumber + 1)
            }>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </PaginationStyles>
    )
  );
};

const mapStateToProps = (state: RootState) => ({
  currentItems: state.content,
  currentLocation: state.nav.category
});

const mapDispatchToProps = (dispatch: ThunkDispatchType) => ({
  startLoadPageImages: (kind: string, searchkey: string, pageNumber: number, perPage: number) =>
    dispatch(loadImages(kind, searchkey, pageNumber, perPage)),
  startLoadPageVideos: (kind: string, searchkey: string, page: number, perpage: number) =>
    dispatch(loadVideos(kind, searchkey, page, perpage))
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Pagination as React.FC);
