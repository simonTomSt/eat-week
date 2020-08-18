import React from 'react';
import Logo from '../../genericComponents/Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.scss';
import { useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
const Header = () => {
  useEffect(() => {
    const header = document.querySelector('.header');
    const logo = document.querySelector('.logo');
    const nav = document.querySelector('.nav');
    const onScroll = (e) => {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
        logo.classList.add('scrolled');
        nav.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
        logo.classList.remove('scrolled');
        nav.classList.remove('scrolled');
      }
    };
    document.addEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="header">
      <Link
        to="opening"
        spy={true}
        smooth={true}
        hashSpy={true}
        duration={1000}
        delay={200}
        isDynamic={true}
        offset={-70}>
        <Logo />
      </Link>

      <Navigation />
    </section>
  );
};

export default Header;
