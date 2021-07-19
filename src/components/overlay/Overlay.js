import React from 'react';
import styled from 'styled-components';

import { Search } from '@styled-icons/bootstrap/Search';

import { connect } from 'react-redux';



const Overlay = ({ section }) => {

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

            <form className="search-form">
                <button className="search-btn" type="submit" aria-label="search">
                    <SerachIcon />
                </button>
                <input className="search-input" placeholder="Search Images ..." />
            </form>

            <div className="populair-images">
                <h4>Populair Images : </h4>
                <button >Nature</button>
                <button >background</button>
                <button >summer</button>
                <button >food</button>
            </div>
        </SearchHolder>
    )
}

const mapStateToProps = state => ({
    section: state.nav,
})

export default connect(mapStateToProps)(Overlay);

































const SerachIcon = styled(Search)`
                    color: black;
                    height : 2em;
                    `

const SearchHolder = styled.section`
                    position: relative;
                    overflow-y: hidden;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                    min-height: 80vh;
                    color: white;
                    background : url(${props => props.img}) center/cover no-repeat;

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
                    padding: 2px 4px;
                    align-items: center;
                    width: 40%;


                    .search-btn {
                    border: none;
                    border-radius: 4px;
                    position: relative;
                    left: 5px;
                    cursor: pointer;
                    }

                    .search-input {
                    font-size: 1em;
                    padding: .5em;
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
