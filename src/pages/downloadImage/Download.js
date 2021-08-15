import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { bigImageView } from '../../components';

function Download({ itemToDownload }) {
    return (
        <DownloadStyled>
            {/* <bigImageView /> */}
        </DownloadStyled>
    )
}






const mapStateToProps = state => ({
    itemToDownload: state.download[0],
});

export default connect(mapStateToProps)(Download);


const DownloadStyled = styled.section`
    
`;
