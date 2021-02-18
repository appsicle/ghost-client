import SigninModal from '../signinModal/SigninModal';

import './profile.scss';
import './GoogleButton.css';

import Dropdown from './Dropdown';
import { Button } from 'shards-react';

import { useDispatch } from 'react-redux';
import {
  openLoginModal,
  openSignupModal,
} from '../signinModal/signInModalSlice';

import useProfile from '../hooks/useProfile';

function Profile() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useProfile();

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
          <Dropdown />
        </div>
      ) : (
        loginAndSignup
      )}
    </>
  );
}

export default Profile;
