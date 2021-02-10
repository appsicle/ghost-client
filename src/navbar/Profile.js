import './Profile.scss';
import Dropdown from '../common/Dropdown';

function Profile({ name, profileURL, onLogoutSuccess }) {
  return (
    <div className="nav-profile-container">
      <Dropdown
        name={name}
        profileURL={profileURL}
        onLogoutSuccess={onLogoutSuccess}
      />
    </div>
  );
}

export default Profile;
