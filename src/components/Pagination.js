import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { loadImages } from '../redux/thunk/thunk';


//@styled-icons/bootstrap/ArrowLeftCircle
function Pagination({ allHits, currentLocation, startLoadTargetPage }) {

    let countity = 50;
    let currentHites = allHits[currentLocation];
    let totalImagesColection = currentHites.pic?.totalHits;
    let totaleImages = currentHites.pic?.total;
    let lastPage = Math.floor(totalImagesColection / countity) + 1;
    let Targetpage = currentHites.page;
    let key = currentHites.searchKey || "";
    let reminderImages = totalImagesColection % countity;

    const [currentPage, setCurrentPage] = useState(Targetpage);


    useEffect(() => {
        console.log("test", currentPage);
        if (currentPage > 0 && currentPage <= lastPage) {
            startLoadTargetPage(key, currentPage);
        }
    }, [currentPage, setCurrentPage])


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
                    onClick={() => setCurrentPage(Targetpage - 1)}
                >
                    <i className="bi bi-chevron-left"></i>
                </button>
                <button
                    className={`right-row ${Targetpage === lastPage ? "desactive-btn" : "active-btn"}`}
                    onClick={() => {
                        setCurrentPage(Targetpage + 1)
                        console.log(currentPage);

                        console.log("workiiiiing");
                    }}>
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
    startLoadTargetPage: (key, page) => dispatch(loadImages(key, page)),
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
                background: #d4d4d4;
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
            background-color: #00d07769;
        }

        .total_passed_pages , .total_pages {
            padding: 0 .5em;
        }
    }
`;
