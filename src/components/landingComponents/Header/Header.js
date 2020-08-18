import React from "react";
import Logo from "../../genericComponents/Logo/Logo";
import Navigation from "../Navigation/Navigation";
import "./Header.scss";
import { useEffect } from "react";
const Header = () => {
  useEffect(() => {
    const header = document.querySelector(".header");
    const logo = document.querySelector(".logo");
    const nav = document.querySelector(".nav");
    const onScroll = (e) => {
      if (window.scrollY > 10) {
        header.classList.add("scrolled");
        logo.classList.add("scrolled");
        nav.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
        logo.classList.remove("scrolled");
        nav.classList.remove("scrolled");
      }
    };
    document.addEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="header">
      <Logo />
      <Navigation />
    </section>
  );
};

export default Header;
