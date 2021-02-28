import './Navbar.scss';
import { Link } from 'react-router-dom';
import Profile from '../Profile/Profile';
import { logo } from '../icons/links';

const Test = ({ a }) => {
  console.log('test', a === true);
  return '';
};

function AppNavbar() {
  const a = false;
  return (
    <header>
      <Test a />
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
