import './Navbar.scss';
import { Link } from 'react-router-dom';
import { Button } from 'shards-react';
import { useDispatch } from 'react-redux';
import { toggleModal } from './roleSelectionModalSlice';
import RoleSelectionModal from './RoleSelectionModal';
import constants from '../constants';
import getRole from '../utils/getRole';
import './GoogleButton.css';

const role = getRole();

// TODO: switch active nav based on state
function AppNavbar() {
  const dispatch = useDispatch();

  const logout = (
    <div className="logout-button-container">
      <Button>Logout</Button>
    </div>
  );

  const loginAndSignup = (
    <div className="account-controls">
      <ul className="account-controls-list">
        <li className="account-controls-list-item">
          <Button
            onClick={() => {
              dispatch(toggleModal());
            }}
          >
            Log in
          </Button>
        </li>
        <li className="account-controls-list-item">
          <Button>Sign Up</Button>
        </li>
      </ul>
    </div>
  );

  return (
    <header>
      <RoleSelectionModal />
      <div className="navbar-container">
        <div className="branding">logo</div>
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
        {role === constants.VISITOR ? loginAndSignup : logout}
      </div>
    </header>
  );
}

export default AppNavbar;
