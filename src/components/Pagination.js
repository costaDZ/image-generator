import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { loadImages, loadPhotos, loadVectors, loadIllistrator, loadVideos } from '../redux/thunk/thunk';


//@styled-icons/bootstrap/ArrowLeftCircle
function Pagination({
    allHits,
    currentLocation,
    startLoadPageImages,
    startLoadPagePhotos,
    startLoadPageVectors,
    startLoadPageIllistrator,
    startLoadPageVideos
}) {

    let currentHites = allHits[currentLocation];
    let countity = currentHites.perPage || 50;
    let totalImagesColection = currentHites.pic?.totalHits;
    let totaleImages = currentHites.pic?.total;
    let lastPage = Math.floor(totalImagesColection / countity) + 1;
    let Targetpage = currentHites.page;
    let key = currentHites.searchKey || "";
    let reminderImages = totalImagesColection % countity;


    function changeThePage(val) {
        if (val > 0 && val <= lastPage) {
            switch (currentLocation) {
                case "main":
                    startLoadPageImages(key, val);
                    break;
                case "photos":
                    startLoadPagePhotos(key, val);
                    break;
                case "vectors":
                    startLoadPageVectors(key, val);
                    break;
                case "illistrations":
                    startLoadPageIllistrator(key, val);
                    break;
                case "videos":
                    startLoadPageVideos(key, val);
                    break;
                default:
                    break;
            }

        }
    }

    return (
        <PaginationStyles>
            <div className="left_box_info">
                {key && <b>{totaleImages} </b>}
                Free images
                {key && <span> of <span className="key_span">"{key}"</span> </span>}
            </div>

            <div className="right_box_info">
                <span className="current_page">{Targetpage}</span>
                <span className="total_passed_pages">
                    {Targetpage === lastPage ? (countity * Targetpage - countity) + reminderImages : (countity * Targetpage - countity)}
                </span>/
                <span className="total_pages">{currentHites ? totalImagesColection : 500}</span>

                <button
                    className={`left-row ${Targetpage === 1 ? "desactive-btn" : "active-btn"}`}
                    onClick={() => changeThePage(Targetpage - 1)}
                >
                    <i className="bi bi-chevron-left"></i>
                </button>
                <button
                    className={`right-row ${Targetpage === lastPage ? "desactive-btn" : "active-btn"}`}
                    onClick={() => changeThePage(Targetpage + 1)}>
                    <i className="bi bi-chevron-right"></i>
                </button>
            </div>
        </PaginationStyles>
    )
}


const mapStateToProps = state => ({
    allHits: state,
    currentLocation: state.nav.category,
});

const mapDispatchToProps = dispatch => ({
    startLoadPageImages: (key, page) => dispatch(loadImages(key, page)),
    startLoadPagePhotos: (key, page) => dispatch(loadPhotos(key, page)),
    startLoadPageVectors: (key, page) => dispatch(loadVectors(key, page)),
    startLoadPageIllistrator: (key, page) => dispatch(loadIllistrator(key, page)),
    startLoadPageVideos: (key, page) => dispatch(loadVideos(key, page)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Pagination);












const PaginationStyles = styled.div`
    display: flex;
    padding: 3em 0;
    text-align: center;
    justify-content: space-around;
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
        width: 9em;
        font-weight: 700;

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
