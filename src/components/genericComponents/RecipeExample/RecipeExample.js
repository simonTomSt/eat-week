import React from 'react';
import './RecipeExample.scss';
const RexipeExample = ({ example }) => {
  const { title, image } = example;

  return (
    <li className="example__item">
      <img src={image} alt={title} className="example__item-img" />
      <h3 className="example__item-name">{title}</h3>
      <button className="primary-btn">Zobacz Przepis</button>
    </li>
  );
};

export default RexipeExample;
