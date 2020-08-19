import React from 'react';
import './AsideBar.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
const AsideBar = () => {
  return (
    <aside className="left">
      <ul className="left__menu">
        <li className="left__item">
          <NavLink
            to="/dashboard/desktop"
            className="left__link"
            activeClassName="active">
            <FontAwesomeIcon icon={faTable} />
          </NavLink>
        </li>
        <li className="left__item">
          <NavLink
            to="/dashboard/favourite"
            className="left__link"
            activeClassName="active">
            <FontAwesomeIcon icon={faHeart} />
          </NavLink>
        </li>
        <li className="left__item">
          <NavLink
            to="/dashboard/myrecipes"
            className="left__link"
            activeClassName="active">
            <FontAwesomeIcon icon={faFolder} />
          </NavLink>
        </li>

        <li className="left__item">
          <NavLink
            to="/dashboard/recipes"
            className="left__link"
            activeClassName="active">
            <FontAwesomeIcon icon={faBook} />
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default AsideBar;
