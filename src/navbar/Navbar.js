import './Navbar.scss';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'shards-react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { toggleModal } from './roleSelectionModalSlice';
import { toggleSigninModal } from '../signinModal/signInModalSlice';
import RoleSelectionModal from './RoleSelectionModal';
import SigninModal from '../signinModal/SigninModal';
import Profile from './Profile';
import './GoogleButton.css';
import UserService from '../user/userService';
import { guestUser } from '../icons/links';

// TODO: switch active nav based on state
function AppNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState(undefined);
  const [profileURL, setProfileURL] = useState(guestUser);
  const dispatch = useDispatch();
  const open = useSelector((state) => state.roleSelectionModalReducer.isOpen);
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
              history.push('/login');
            }}
          >
            Log in
          </Button>
        </li>
        <li className="account-controls-list-item">
          <Button
            onClick={() => {
              dispatch(toggleModal());
            }}
          >
            Sign Up
          </Button>
        </li>
        <li className="account-controls-list-item">
          <Button
            onClick={() => {
              dispatch(toggleSigninModal());
            }}
          >
            Test
          </Button>
        </li>
      </ul>
    </div>
  );

  return (
    <header>
      <RoleSelectionModal />
      <SigninModal />
      <div className="navbar-container">
        <div className="branding">
          logo
          {open.toString()}
        </div>
        <div className="nav-links">
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/faq">How it Works</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>
        </div>
        {isLoggedIn ? (
          <Profile
            name={name}
            profileURL={profileURL}
            onLogoutSuccess={onLogoutSuccess}
          />
        ) : (
          loginAndSignup
        )}
      </div>
    </header>
  );
}

export default AppNavbar;
