import React, { useRef } from 'react';
import './Dropdown.scss';
import useDetectOutsideClick from '../hooks/useDetectOutsideClick';
import Logout from '../navbar/Logout';
import dashboardIcon from '../icons/dropdown_dashboard.svg';
import settingsIcon from '../icons/dropdown_settings.svg';

function Dropdown({ name, profileURL, onLogoutSuccess }) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  // TODO: convert to higher order component

  return (
    <div className="dropdown-container">
      <div className="dropdown-menu-container">
        <button
          type="button"
          onClick={onClick}
          className="dropdown-menu-trigger"
        >
          <span>{name}</span>
          <img className="profile-image" src={profileURL} alt="User avatar" />
        </button>
        <nav
          ref={dropdownRef}
          className={`dropdown-menu ${isActive ? 'active' : 'inactive'}`}
        >
          <ul>
            <li className="underlined">
              <a href="/">
                <img
                  className="dropdown-icon"
                  src={dashboardIcon}
                  alt="dashboard"
                />
                Dashboard
              </a>
            </li>
            <li className="underlined">
              <a href="/settings">
                {' '}
                <img
                  className="dropdown-icon"
                  src={settingsIcon}
                  alt="settings"
                />
                Settings
              </a>
            </li>
            <li>
              <Logout onLogoutSuccess={onLogoutSuccess} />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Dropdown;
