import React, { useEffect, useState } from 'react';
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

    let currentHites;
    let countity;
    let totalImagesColection;
    let totaleImages;
    let lastPage;
    let Targetpage;
    let key;
    let reminderImages;

    // const [currentHites, setcurrentHites] = useState([]);
    // const [countity, setcountity] = useState(500);
    // const [totalImagesColection, settotalImagesColection] = useState(500);
    // const [totaleImages, settotaleImages] = useState(500);
    // const [lastPage, setlastPage] = useState(1);
    // const [Targetpage, setTargetpage] = useState(1);
    // const [key, setkey] = useState("");
    // const [reminderImages, setreminderImages] = useState(1);


    if (currentLocation) {
        // setcurrentHites(allHits[currentLocation]);
        // setcountity(currentHites.perPage || 50);
        // settotalImagesColection(currentHites.pic?.totalHits);
        // settotaleImages(currentHites.pic?.total);
        // setlastPage(Math.floor(totalImagesColection / countity) + 1);
        // setTargetpage(currentHites.page);
        // setkey(currentHites.searchKey || "");
        // setreminderImages(totalImagesColection % countity);

        currentHites = allHits[currentLocation];
        countity = currentHites.perPage || 50;
        totalImagesColection = currentHites.pic?.totalHits;
        totaleImages = currentHites.pic?.total;
        lastPage = Math.floor(totalImagesColection / countity) + 1;
        Targetpage = currentHites.page;
        key = currentHites.searchKey || "";
        reminderImages = totalImagesColection % countity;
        console.log(currentHites);
        console.log(totalImagesColection);
    }




    // const [infoLogique, setInfoLogique] = useState({
    //     currentHites: allHits[currentLocation],
    //     countity: allHits[currentLocation].perPage || 50,
    //     totalImagesColection: allHits[currentLocation].pic.totalHits,
    //     totaleImages: allHits[currentLocation].pic.total,
    //     lastPage: Math.floor(allHits[currentLocation].pic.totalHits / allHits[currentLocation].perPage || 50) + 1,
    //     Targetpage: allHits[currentLocation].page,
    // });

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
                <span className="current_page">{Targetpage || 1}</span>
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
