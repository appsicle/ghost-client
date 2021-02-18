import './Navbar.scss';
import Profile from './Profile';
import { logo } from '../icons/links';
import { Link } from 'react-router-dom';

function AppNavbar() {
  return (
    <header>
      <div className="navbar-container">
        <div className="branding-container">
          <img className="branding" src={logo} alt="" />
          <span className="branding-title">Heighten</span>
        </div>
        <div className="nav-links">
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-list-item">
              <a href="/#how-it-works">How it Works</a>
            </li>
            <li className="nav-list-item">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <Profile />
      </div>
    </header>
  );
}

export default AppNavbar;
