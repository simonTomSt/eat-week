import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import "./Logo.scss";
const Logo = () => (
  <div className="logo">
    <span className="logo__icon">
      <FontAwesomeIcon icon={faUtensils} />
    </span>
    <p className="logo__text">
      <span>eat</span>Week
    </p>
  </div>
);
export default Logo;
