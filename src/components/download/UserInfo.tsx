import React from 'react';
import styled from 'styled-components';
import unknown from '../../images/Unknown-person.gif';

interface UserInfoProps {
  info: any;
}

const UserInfo = ({ info }: UserInfoProps) => {
  return (
    <UserInfoStyles>
      <div className="use_info">
        <img src={info.userImage || unknown} alt="photographer" className="user_img" />
        <p>Photographer : {info.user}</p>
      </div>

      <div className="user_btn_section">
        <button>
          <i className="bi bi-hand-thumbs-up"></i> 10{' '}
        </button>
        <button>
          <i className="bi bi-share"></i>
        </button>
        <button>
          <i className="bi bi-collection"></i>
        </button>
      </div>
    </UserInfoStyles>
  );
};
export default UserInfo;

const UserInfoStyles = styled.div`
  @media (max-width: 992px) {
    width: 80%;
    margin: auto;
  }
  @media (max-width: 376px) {
    width: 100%;
  }

  .use_info {
    display: flex;
    justify-content: space-between;
    .user_img {
      height: 6em;
      border-radius: 50%;
    }

    p {
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 376px) {
        font-size: 0.8em;
      }
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
      transition: all 0.3s;

      &:hover {
        cursor: pointer;
        background-color: var(--green-color);
      }
    }

    button:nth-child(2) {
      background-color: #dddfe2;
      &:hover {
        cursor: pointer;
        background-color: var(--light-green-color);
      }
    }
  }
`;
