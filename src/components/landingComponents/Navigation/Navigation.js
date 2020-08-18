import React from 'react';
import './Navigation.scss';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Link as LinkBtn } from 'react-router-dom';
const Navigation = () => {
  const settings = {
    className: 'nav__link',
    activeClass: 'active',
    spy: true,
    smooth: true,
    hashSpy: true,
    duration: 1000,
    delay: 200,
    isDynamic: true,
    offset: -70,
  };
  return (
    <nav className="nav">
      <ul className="nav__menu">
        <li className="nav__item">
          <Link
            to="about"
            className={settings.className}
            activeClass={settings.activeClass}
            spy={settings.spy}
            smooth={settings.smooth}
            hashSpy={settings.hashSpy}
            duration={settings.duration}
            delay={settings.delay}
            isDynamic={settings.isDynamic}
            offset={settings.offset}>
            O aplikacji
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="features"
            className={settings.className}
            activeClass={settings.activeClass}
            spy={settings.spy}
            smooth={settings.smooth}
            hashSpy={settings.hashSpy}
            duration={settings.duration}
            delay={settings.delay}
            isDynamic={settings.isDynamic}
            offset={settings.offset}>
            Funkcjonalności
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="about"
            className={settings.className}
            activeClass={settings.activeClass}
            spy={settings.spy}
            smooth={settings.smooth}
            hashSpy={settings.hashSpy}
            duration={settings.duration}
            delay={settings.delay}
            isDynamic={settings.isDynamic}
            offset={settings.offset}>
            Kontakt
          </Link>
        </li>
        <LinkBtn to="/signin">
          <button className="primary-btn nav__btn">Aplikacja</button>
        </LinkBtn>
      </ul>
    </nav>
  );
};
export default Navigation;
