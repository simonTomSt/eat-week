import React from "react";
import "./Opening.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faMouse } from "@fortawesome/free-solid-svg-icons";
import { Link as LinkBtn } from "react-router-dom";
const Header = () => {
  return (
    <section className="opening">
      <div className="opening__content">
        <h1 className="opening__header">
          Odkryj nowe smaki i zaplanuj swoją dietę!
        </h1>
        <LinkBtn to to="/dashboard/loginPanel">
          <button className="primary-btn opening__btn">
            Stwórz swój plan!
          </button>
        </LinkBtn>
      </div>
      <Link
        to="about"
        spy={true}
        smooth={true}
        hashSpy={true}
        duration={1000}
        delay={200}
        isDynamic={true}
        offset={-70}
      >
        <div className="opening__scroll">
          <span className="opening__mouse">
            <FontAwesomeIcon icon={faMouse} />
          </span>
          <span className="opening__arrow">
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
      </Link>
    </section>
  );
};

export default Header;
