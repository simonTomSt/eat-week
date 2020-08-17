import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../../landingComponents/Navigation/Navigation";
import { createStore } from "redux";
import "./Header.scss";
const Header = () => {
  return (
    <section className="header">
      <Logo />
      <Navigation />
    </section>
  );
};

export default Header;
