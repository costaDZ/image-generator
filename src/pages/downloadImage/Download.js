import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleDownloadSizes } from '../../redux/actions/downloadActions';
import {
    ImagesHolder,
    BigImageView,
    DownloadBtn,
    UserInfo,
    ImageInfo,
} from '../../components';


function Download({ toggleDownloadSizes, targetType, info, }) {

    function closeSizes(e) {
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
                    info={info}
                />
                <div className="side_bar">
                    <UserInfo info={info} />
                    <DownloadBtn
                        targetType={targetType}
                        toggleDownloadSizes={toggleDownloadSizes}
                        info={info}
                    />
                    <ImageInfo {...info} />
                </div>
            </div>

            <div className="related_images">
                <h3>Discover More :</h3>
                <ImagesHolder />
            </div>
        </DownloadStyled>
    )
}

const mapStateToProps = state => ({
    info: state.download,
    targetType: state.download.targetType,
});

const mapDispatchToProps = dispatch => ({
    toggleDownloadSizes: action => dispatch(toggleDownloadSizes(action)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Download);

const DownloadStyled = styled.section`
        padding: 5em 5em;

        @media (max-width: 768px) {
        padding: 5em 2em;
        }
        @media (max-width: 376px) {
        padding: 3em .5em;
        }

    .first_container {
        display: flex;
        justify-content: space-evenly;

        @media (max-width: 992px) {
            flex-direction: column;
            height: 60em;
        }

        .side_bar {
            position: relative;
            padding: 0em 1em;
        }
    }
    .related_images {
        h3 {
            color: var(--grey-text);
        }
    }
`;
