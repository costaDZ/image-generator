import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
    BigImageView,
    DownloadBtn,
    UserInfo
} from '../../components';

import { toggleDownloadSizes } from '../../redux/actions/downloadActions';

function Download({
    itemToDownload,
    toggleDownloadSizes,
    sizes,
    extention,
    targetType,
}) {

    const { user, userImageURL } = itemToDownload;

    function closeSizes(e) {
        // console.log(e.target.classList.contains('pre'));
        console.log(e.target.tagName);
        let elm = e.target;

        if (!elm.classList.contains('pre')
            && elm.tagName !== "FORM"
            && elm.tagName !== "INPUT"
        ) {
            toggleDownloadSizes('c');
        }
    }

    return (
        <DownloadStyled onClick={(e) => closeSizes(e)}>
            <div className="first_container">

                <BigImageView
                    targetType={targetType}
                    itemToDownload={itemToDownload}
                />

                <div className="side_bar">
                    <UserInfo
                        userImage={userImageURL}
                        user={user}
                    />
                    <DownloadBtn
                        itemToDownload={itemToDownload}
                        targetType={targetType}
                        toggleDownloadSizes={toggleDownloadSizes}
                        sizes={sizes}
                        extention={extention}
                    />
                </div>
            </div>
        </DownloadStyled>
    )
}

const mapStateToProps = state => ({
    itemToDownload: state.download.targetImage,
    sizes: state.download.sizes,
    extention: state.download.extention,
    targetType: state.download.targetType,
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
            flex: 1;
            padding: 0em 1em;
        }
    }
`;
