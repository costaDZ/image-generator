import React from 'react';
import styled from 'styled-components';


function StatusCollectionBar() {
    return (
        <StatusBarStyled>
            <ul>
                <h4>Total collection : 25</h4>
                <li>photos : (23 )</li>
                <li>vector : (23)</li>
                <li>illustration: (23)</li>
                <li>videos: (23)</li>
            </ul>
        </StatusBarStyled>
    )
}

export default StatusCollectionBar;


const StatusBarStyled = styled.div`
        background-color: var(--green-color);
        position: fixed;
        bottom: 0;
        width: 100%;

        ul {
                display: flex;
                list-style: none;
                justify-content: space-evenly;
                align-items: center;
                margin: 0;
            h4 {
                    margin: .3em;
                    display: inline-block;
                    background: white;
                    border-radius: 40px;
                    padding: .2em .5em;
            }

            li {
                font-weight: 700;
            }
        }
`;