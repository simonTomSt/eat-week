import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './Loading.scss';
const Loader = () => {
  return (
    <div className="loader">
      <FontAwesomeIcon className="user-menu__btn" icon={faSpinner} />
    </div>
  );
};

export default Loader;
