import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { BigImageView, DownloadBtn, UserInfo } from '../../components';

import { toggleDownloadSizes } from '../../redux/actions/downloadActions';

function Download({ itemToDownload, toggleDownloadSizes }) {

    console.log(itemToDownload);
    const { webformatURL, largeImageURL, tags, type } = itemToDownload;

    return (
        <DownloadStyled>
            <div className="first_container">

                <BigImageView
                    large={largeImageURL}
                    normal={webformatURL}
                />

                <div className="side_bar">
                    <UserInfo />
                    <DownloadBtn toggleDownloadSizes={toggleDownloadSizes} />
                </div>
            </div>


        </DownloadStyled>
    )
}






const mapStateToProps = state => ({
    itemToDownload: state.download.targetImage,
});

const mapDispatchToProps = dispatch => ({
    toggleDownloadSizes: action => dispatch(toggleDownloadSizes(action)),
});



export default connect(mapStateToProps, mapDispatchToProps)(Download);


const DownloadStyled = styled.section`
    padding: 5em 5em;
    .first_container {
        display: flex;
        justify-content: space-between;

        .side_bar {
        //    background: antiquewhite;
            flex: 1;
            padding: 0em 1em;
        }
    }


`;
