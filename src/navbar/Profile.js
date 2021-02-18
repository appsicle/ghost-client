import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SigninModal from '../signinModal/SigninModal';

import './Profile.scss';
import './GoogleButton.css';

import Dropdown from '../common/Dropdown';
import UserService from '../user/userService';
import { guestUser } from '../icons/links';
import { Button } from 'shards-react';

import { useDispatch } from 'react-redux';
import {
  openLoginModal,
  openSignupModal,
} from '../signinModal/signInModalSlice';

function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState(undefined);
  const [profileURL, setProfileURL] = useState(guestUser);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn'));
    setName(localStorage.getItem('name'));
    setProfileURL(localStorage.getItem('profile'));
  }, []);

  // TODO: feels sus that it could fail after saying it succeeded
  const onLogoutSuccess = async () => {
    console.log('successful logout');
    await UserService.logout();
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('name');
    localStorage.removeItem('profile');
    setIsLoggedIn(false);
    history.push('/');
  };

  const loginAndSignup = (
    <div className="account-controls">
      <ul className="account-controls-list">
        <li className="account-controls-list-item">
          <Button
            onClick={() => {
              dispatch(openLoginModal());
            }}
          >
            Log in
          </Button>
        </li>
        <li className="account-controls-list-item">
          <Button
            onClick={() => {
              dispatch(openSignupModal());
            }}
          >
            Sign up
          </Button>
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <SigninModal />
      {isLoggedIn ? (
        <div className="nav-profile-container">
          <Dropdown
            name={name}
            profileURL={profileURL}
            onLogoutSuccess={onLogoutSuccess}
          />
        </div>
      ) : (
        loginAndSignup
      )}
    </>
  );
}

export default Profile;
