import React from 'react';
import './RecipeExample.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
const RexipeExample = ({ example }) => {
  console.log(example);
  const { title, image } = example;

  return (
    <li className="example__item">
      <FontAwesomeIcon icon={faHeart} className="example__item-icon" />
      <img src={image} alt={title} className="example__item-img" />
      <h3 className="example__item-name">{title}</h3>
      <button className="primary-btn">Open recipe</button>
    </li>
  );
};

export default RexipeExample;
