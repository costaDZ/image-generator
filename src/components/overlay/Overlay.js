import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Search } from '@styled-icons/bootstrap/Search';

import { connect } from 'react-redux';
import { loadPhotos } from '../../redux/thunk/thunk';


const Overlay = ({ startSearchingPhotos, section }) => {

    const [searchKey, setSearchKey] = useState('');


    function startSearch(e) {
        e.preventDefault();
        startSearchingPhotos(e.target.lastElementChild.value);
        e.target.lastElementChild.value = "";
    }

    useEffect(() => {
        startSearchingPhotos(searchKey);
    }, [searchKey, startSearchingPhotos])

    let data = section.main || section;
    return (
        <SearchHolder img={data.back}>

            <h1 className="main-title">
                {data.title}
            </h1>

            <p className="desc">
                {data.dec}
            </p>

            {data.video &&
                <video className="video" autoPlay muted loop >
                    <source src={data.video} type="video/mp4" />
                    <source src={data.video} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
            }

            <form className="search-form" onSubmit={(e) => startSearch(e)}>
                <button
                    className="search-btn"
                    type="submit"
                    aria-label="search"
                //onClick={}
                >
                    <SerachIcon />
                </button>
                <input
                    className="search-input"
                    placeholder={`Search ${data.category} ...`}
                //  onChange={(e) => setSearchKey(e.target.value)}
                />
            </form>

            <div className="populair-images">
                <h4>Populair Images : </h4>
                {data.populair?.map((item, i) => {
                    return <button
                        key={i}
                        onClick={(e) => setSearchKey(e.target.textContent)}
                    >{item}</button>
                })}
            </div>

        </SearchHolder>
    )
}

const mapStateToProps = state => ({
    section: state.nav,
})

const mapDispatchToProps = dispatch => ({
    startSearchingPhotos: (searchKey) => dispatch(loadPhotos(searchKey))
})

export default connect(mapStateToProps, mapDispatchToProps)(Overlay);








const SerachIcon = styled(Search)`
                    height : 2em;
                    `

const SearchHolder = styled.section`
                    position: relative;
                    overflow-y: hidden;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                    min-height: 70vh;
                    color: white;
                    background : url(${props => props.img}) center/cover no-repeat;

                    .main-title {
                        font-size: 2.5em;
                    }

                    video {
                        left: 50%;
                        min-height: 100%;
                        min-width: 100%;
                        position: absolute;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        z-index: -1;
                    }


                    .search-form {
                    display: flex;
                    /* padding: 2px 4px;
                    align-items: center; */
                    width: 40%;


                    .search-btn {
                    border: none;
                    border-radius: 4px;
                    position: relative;
                    left: 5px;
                    cursor: pointer;
                    padding: 1em;
                    color: var(--grey-text);
                    transition: var(--transition);
                        &:hover {
                            color: black;
                        }
                    }

                    .search-input {
                    font-weight: 700;
                    font-size: 1em;
                    padding: 13px;
                    border-radius: 4px;
                    outline: none;
                    border: none;
                    width: 100%;
        }

    }


                    .populair-images {

                        h4 {
                        display : inline-block;
                        }

                    button {
                    font-size: .8em;
                    background: #02be6e78;
                    border-radius: 30px;
                    color: white;
                    cursor: pointer;
                    padding: .2em .4em;
                    margin: 0 .1em;
                    font-weight: 700;
                    
                    }
    }
                    `
