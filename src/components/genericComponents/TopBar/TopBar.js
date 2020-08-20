import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import UserMenu from '../UserMenu/UserMenu';
import './TopBar.scss';
import { Link } from 'react-router-dom';
const TopBar = () => {
  const [activeSettings, setActiveSettings] = useState(false);
  const handleClick = () => {
    setActiveSettings((prevState) => !prevState);
  };
  return (
    <div className="top">
      <Logo className="small-logo" />
      <button className="top__toggler" onClick={handleClick}>
        <UserMenu />
      </button>
      {activeSettings ? (
        <div className="top__settings">
          <ul className="top__settings-list">
            <Link to="/dashboard/filters">
              <li className="top__settings-item">Filters</li>
            </Link>

            <li className="top__settings-item">Settings</li>
            <button className="top__settings-btn">Sign Out</button>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default TopBar;
