import React from 'react';
import Logo from '../Logo/Logo';
import UserMenu from '../UserMenu/UserMenu';
import './TopBar.scss';
const TopBar = () => {
  return (
    <div className="top">
      <Logo className="small-logo" />

      <UserMenu />
    </div>
  );
};

export default TopBar;
