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

    if (targetType === "video") {
        const { user, userImageURL } = itemToDownload;
        const { large, medium, small, tiny } = itemToDownload.videos;
        // const { url, width, height,size } = large;
        // const { url, width, height,size } = medium;
        // const { url, width, height, size } = small;
        // const { url, width, height, size } = tiny;
        console.log(user);

        return (
            <DownloadStyled>
                <div className="first_container">

                    <BigImageView
                        targetType={targetType}
                        large={large}
                        normal={medium}
                        small={small}
                        tiny={tiny}
                    />

                    {/* <div className="side_bar">
                        <UserInfo
                            userImage={userImageURL}
                            user={user}
                        />
                        <DownloadBtn
                            toggleDownloadSizes={toggleDownloadSizes}
                            sizes={sizes}
                            mediumVideo={medium}
                            largeVideo={large}
                            extention={extention}
                        />
                    </div> */}
                </div>
            </DownloadStyled>
        )

    } else {
        const {
            webformatURL,
            largeImageURL,
            tags,
            type,
            userImageURL,
            user,
            webformatWidth,
            webformatHeight,
            imageWidth,
            imageHeight,
            imageSize,
        } = itemToDownload;


        return (
            <DownloadStyled>
                <div className="first_container">

                    <BigImageView
                        large={largeImageURL}
                        normal={webformatURL}
                    />

                    <div className="side_bar">
                        <UserInfo
                            userImage={userImageURL}
                            user={user}
                        />
                        <DownloadBtn
                            toggleDownloadSizes={toggleDownloadSizes}
                            sizes={sizes}
                            smallWidth={webformatWidth}
                            smallHeight={webformatHeight}
                            largeWidth={imageWidth}
                            largeHeight={imageHeight}
                            extention={extention}
                        />
                    </div>
                </div>
            </DownloadStyled>
        )
    }

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



export default connect(mapStateToProps,
    mapDispatchToProps)(Download);


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
