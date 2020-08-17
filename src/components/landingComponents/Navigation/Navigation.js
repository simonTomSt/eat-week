import React from "react";
import "./Navigation.scss";
const Navigation = () => (
  <nav className="nav">
    <ul className="nav__menu">
      <li className="nav__item">
        <a href="#" className="nav__link active">
          Funkcjonalności
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link">
          O aplikacji
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link">
          Kontakt
        </a>
      </li>

      <button className="primary-btn nav__btn">Aplikacja</button>
    </ul>
  </nav>
);
export default Navigation;
