import './Navbar.scss';
import { Link } from 'react-router-dom';

// TODO: switch active nav based on state
function AppNavbar() {
  return (
    <header>
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
        <div className="account-controls">
          <ul className="account-controls-list">
            <li className="account-controls-list-item">
              <Link to="/login">Login</Link>
            </li>
            <li className="account-controls-list-item">
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default AppNavbar;
