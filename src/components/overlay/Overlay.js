import React from 'react';
import styled from 'styled-components';
import { Container } from '../../styles';

import { Search } from '@styled-icons/bootstrap/Search';


import data from '../../data';
// import img from '../../../public/images/back.jpg';

const SerachIcon = styled(Search)`
    color: black;
    height : 2em;
`

const page = 'main';

export const Overlay = () => {
    return (
        <SearchHolder img={data[page].backImg}>
            <MainTitle >
                {data[page].title}
            </MainTitle>
            <Desc >
                {data[page].dec}
            </Desc>

            <SearchField>
                <SearchBtn type="submit" aria-label="search">
                    <SerachIcon />
                </SearchBtn>
                <SearchInput placeholder="Search Images ..." />
            </SearchField>

            <PopulairImages>
                <Title>Populair Images : </Title>
                <Item>Nature</Item>
                <Item>background</Item>
                <Item>summer</Item>
                <Item>food</Item>
                <Item>beach</Item>
                <Item>sky</Item>
                <Item>money</Item>
                <Item>dog</Item>
                <Item>love</Item>
                <Item>cat</Item>
                <Item>flower</Item>
                <Item>car</Item>
                <Item>coronavir</Item>
            </PopulairImages>
        </SearchHolder>
    )
}


const SearchHolder = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        min-height: 80vh;
        color: white;
        background : url(${props => props.img}) center/cover no-repeat;
`
//${ props => props.img }

const MainTitle = styled.h1`

`

const Desc = styled.p`

`
const SearchField = styled.form`
    display: flex;
    padding: 2px 4px;
    alignItems: center;
    width: 40%;
`
const SearchBtn = styled.button`
    border: none;
    border-radius: 4px;
    position: relative;
    left: 5px;
    cursor: pointer;
`
const SearchInput = styled.input`
    font-size: 1em;
    padding: .5em;
    border-radius: 4px;
    outline: none;
    border: none;
    width: 100%;
`

const PopulairImages = styled.div`

`
const Title = styled.h4`
    display : inline-block
`
const Item = styled.a`
    font-size: .8em;
    background: #02be6e78;
    border-radius: 30px;
    color: white;
    cursor: pointer;
    padding: .2em .4em;
    margin: 0 .1em;
    font-weight: 700;
`




    // < picture >
    //             <source srcset="https://cdn.pixabay.com/index/2021/07/12/12-30-45-745_1920x550.jpg" media="(min-width: 1440px)" />
    //             <source srcset="https://cdn.pixabay.com/index/2021/07/12/12-30-45-745_640.jpg" media="(max-width: 640px)" />
    //             <img src="https://cdn.pixabay.com/index/2021/07/12/12-30-45-745_1440x550.jpg" className="hero-background" />
    //         </ >