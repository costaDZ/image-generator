import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import {
    loadImages,
    loadVideos
} from '../redux/thunk/thunk';


function Pagination({
    currentItems,
    currentLocation,
    startLoadPageImages,
    startLoadPageVideos
}) {

    const { kind, searchKey, pic, pageNumber, perPage, isLoading } = currentItems;

    function changeThePage(val) {
        switch (currentLocation) {
            case "videos":
                startLoadPageVideos(searchKey, val);
                break;
            default:
                startLoadPageImages(kind, searchKey, val, perPage);
                break;
        }
    }

    return (
        !isLoading &&
        <PaginationStyles>
            <div className="left_box_info">
                {searchKey && <b>{pic.total} </b>}
                Free <span>{currentItems.kind === "videos" ? "Videos" : 'Images'}</span>
                {searchKey && <span> of <span className="key_span">"{searchKey}"</span> </span>}
            </div>

            <div className="right_box_info">
                <span className="current_page">{pageNumber}</span>
                <span className="total_passed_pages">

                    {
                        pageNumber === Math.ceil(pic.totalHits / perPage)
                            ? (pic.totalHits - (pageNumber - 1) * perPage) + ((pageNumber - 1) * perPage)
                            : pageNumber * perPage
                    }

                </span>/
                <span className="total_pages">{pic ? pic.totalHits : 500}</span>

                <button
                    className={`left-row ${pageNumber === 1 ? "desactive-btn" : "active-btn"}`}
                    onClick={() => pageNumber > 1 && changeThePage(pageNumber - 1)}
                >
                    <i className="bi bi-chevron-left"></i>
                </button>
                <button
                    className={`right-row ${pageNumber >= (Math.ceil(pic.totalHits / perPage)) ? "desactive-btn" : "active-btn"}`}
                    onClick={() => pageNumber < Math.ceil(pic.totalHits / perPage) && changeThePage(pageNumber + 1)}
                >
                    <i className="bi bi-chevron-right"></i>
                </button>
            </div>
        </PaginationStyles >
    )
}


const mapStateToProps = state => ({
    currentItems: state.nav.category === "videos" ? state.videos : state.images,
    currentLocation: state.nav.category,
});

const mapDispatchToProps = dispatch => ({
    startLoadPageImages: (kind, searchkey, pageNumber, perPage) => dispatch(loadImages(kind, searchkey, pageNumber, perPage)),
    startLoadPageVideos: (searchkey, page) => dispatch(loadVideos(searchkey, page)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Pagination);




const PaginationStyles = styled.div`
    display: flex;
    padding: 3em 0;
    text-align: center;
    justify-content: space-around;

    @media (max-width: 992px) {
        flex-direction: column-reverse;
        height: 9em;
    }

    .left_box_info {
        @media (min-width: 992px) {
            padding-left: 2em;
        }
    }

    .left_box_info {
        .key_span {
        color: var(--green-color);
        font-weight: 700;
        }
    }
    .right_box_info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        font-weight: 700;
        width: 14em;

        .current_page {
            border: 1px solid #b7b7b7;
            padding: 0.2em .5em;
        }
        .left-row, .right-row {
                background-color: #00d07769;
                border-radius: 12px;
                font-size: 1em;
                border: none;
                padding: 0.2em 0.6em;
                transition: var(--transition);
                margin: 0 .5em;
                outline: none;
        }

        .active-btn {
            &:hover {
                    cursor: pointer;
                    background-color: var(--green-color);
                }
        }

        .desactive-btn {
                background: #d4d4d4;
        }

        .total_passed_pages , .total_pages {
            padding: 0 .5em;
        }
    }
`;
