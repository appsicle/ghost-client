import './profile.scss';
import './GoogleButton.css';

import { Button } from 'shards-react';
import { useDispatch } from 'react-redux';
import AuthModal from '../authModal/AuthModal';
import {
  openModal, switchToSignin, switchToSignup,
} from '../authModal/AuthModalSlice';
import Dropdown from './Dropdown';

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
              dispatch(switchToSignin());
              dispatch(openModal());
            }}
          >
            Log in
          </Button>
        </li>
        <li className="account-controls-list-item">
          <Button
            onClick={() => {
              dispatch(switchToSignup());
              dispatch(openModal());
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
      <AuthModal />
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
