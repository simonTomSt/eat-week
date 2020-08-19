import React from 'react';
import './UserMenu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
const UserMenu = () => {
  return (
    <div className="user-menu">
      <p className="user-menu__name">Imię</p>
      <FontAwesomeIcon className="user-menu__btn" icon={faUserCircle} />
    </div>
  );
};

export default UserMenu;
