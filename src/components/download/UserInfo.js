import React from 'react'
import styled from 'styled-components';


function UserInfo({ userImage, user }) {
    return (
        <UserInfoStyles>
            <div className="use_info">
                <img src={userImage} alt="photographer" className="user_img" />
                <p>Photographer : {user}</p>
            </div>

            <div className="user_btn_section">
                <button><i class="bi bi-hand-thumbs-up"></i> 10 </button>
                <button><i class="bi bi-share"></i></button>
                <button><i class="bi bi-collection"></i></button>
            </div>
        </UserInfoStyles>
    )
}


export default UserInfo;


const UserInfoStyles = styled.div`
    .use_info {
        display: flex;
        justify-content: space-around;
        .user_img {
            height: 6em;
            border-radius: 50%;
        }

        p {
            font-weight: 700;
        }
    }

    .user_btn_section {
        display: flex;
        justify-content: space-around;
        padding: 1em 0;

        button {
            display: inline-block;
            padding: 0 15px;
            width: 6em;
            height: 28px;
            font-weight: 700;
            line-height: 24px;
            border-radius: 40px;
            max-width: 100px;
            background-color: var(--light-green-color);
            border: none;
        }

        button:nth-child(2) {
            background-color: #dddfe2;
        }
    }


    
    
`;
