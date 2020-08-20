import React from 'react';
import './AsideBar.scss';
import ReactTooltip from 'react-tooltip';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const AsideBar = () => {
  return (
    <aside className="left">
      <ul className="left__menu">
        <li className="left__item" data-tip data-for="desktop">
          <NavLink
            to="/dashboard/desktop"
            className="left__link"
            activeClassName="active">
            <FontAwesomeIcon icon={faTable} />
          </NavLink>
        </li>
        <li className="left__item" data-tip data-for="favourites">
          <NavLink
            to="/dashboard/favourite"
            className="left__link"
            activeClassName="active">
            <FontAwesomeIcon icon={faHeart} />
          </NavLink>
        </li>
        <li className="left__item" data-tip data-for="myrecipes">
          <NavLink
            to="/dashboard/myrecipes"
            className="left__link"
            activeClassName="active">
            <FontAwesomeIcon icon={faBook} />
          </NavLink>
        </li>

        <li className="left__item" data-tip data-for="search">
          <NavLink
            to="/dashboard/recipes"
            className="left__link"
            activeClassName="active">
            <FontAwesomeIcon icon={faSearch} />
          </NavLink>
        </li>
      </ul>
      <ReactTooltip id="desktop" place="right" effect="solid">
        Desktop
      </ReactTooltip>
      <ReactTooltip id="favourites" place="right" effect="solid">
        Favourites
      </ReactTooltip>
      <ReactTooltip id="myrecipes" place="right" effect="solid">
        My recipes
      </ReactTooltip>
      <ReactTooltip id="search" place="right" effect="solid">
        Search Recipes
      </ReactTooltip>
    </aside>
  );
};

export default AsideBar;
