import React from "react";
import "./Opening.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faMouse } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <section className="opening">
      <div className="opening__content">
        <h1 className="opening__header">
          <p>Create </p> <p>weekly plan</p> <p>and taste</p> new food
        </h1>
        <button className="primary-btn opening__btn">Stwórz swój plan!</button>
      </div>
      <div className="opening__scroll">
        <span className="opening__mouse">
          <FontAwesomeIcon icon={faMouse} />
        </span>
        <span className="opening__arrow">
          <FontAwesomeIcon icon={faAngleDown} />
        </span>
      </div>
    </section>
  );
};

export default Header;
