import unknown from '../../images/Unknown-person.gif';
import { UserInfoStyles } from './UserInfo.styles';

interface UserInfoProps {
  info: Download;
}

const UserInfo = ({ info }: UserInfoProps) => {
  return (
    <UserInfoStyles>
      <div className="use_info">
        <img src={info.userImageURL || unknown} alt="photographer" className="user_img" />
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
