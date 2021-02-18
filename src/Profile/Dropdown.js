import React, { useRef, useEffect, useState } from 'react';
import './Dropdown.scss';
import {
  dropdownDashboard,
  dropdownSettings,
  dropdownLogout,
} from '../icons/links';
import useDetectOutsideClick from '../hooks/useDetectOutsideClick';
import useProfile from '../hooks/useProfile';
import useLogout from '../hooks/useLogout';

function Dropdown() {
  const { role, name, profilePic, profileError } = useProfile();
  const logout = useLogout();
  const [dashboardLink, setDashboardLink] = useState('/');

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  useEffect(() => {
    switch (role) {
      case 'REVIEWEE':
        setDashboardLink('/RevieweeDashboard');
        break;
      case 'REVIEWER':
        setDashboardLink('/ReviewerDashboard');
        break;
      default:
        setDashboardLink('/');
    }
  }, [role, profileError]);

  return (
    <div className="dropdown-container">
      <div className="dropdown-menu-container">
        <button
          type="button"
          onClick={onClick}
          className="dropdown-menu-trigger"
        >
          <span>{name}</span>
          <img className="profile-image" src={profilePic} alt="User avatar" />
        </button>
        <nav
          ref={dropdownRef}
          className={`dropdown-menu ${isActive ? 'active' : 'inactive'}`}
        >
          <ul>
            <li className="underlined">
              <a href={dashboardLink}>
                <img
                  className="dropdown-icon"
                  src={dropdownDashboard}
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
                  src={dropdownSettings}
                  alt="settings"
                />
                Settings
              </a>
            </li>
            <li>
              <button type="button" onClick={logout}>
                <img
                  className="dropdown-icon"
                  src={dropdownLogout}
                  alt="logout"
                />
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Dropdown;
