import React from 'react';
import './RecipeExample.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import graphicImg from '../../../images/RecipeExample/graphImg.png';
const RexipeExample = ({ example }) => {
  const { title, image } = example;

  return (
    <li className="example__item">
      <FontAwesomeIcon icon={faHeart} className="example__item-icon" />
      <img
        src={image ? image : graphicImg}
        alt={title}
        className="example__item-img"
      />
      <h3 className="example__item-name">{title}</h3>
      <Link
        to={{
          pathname: '/dashboard/recipe',
          recipe: example,
        }}>
        <button
          className="primary-btn"
          onClick={() =>
            localStorage.setItem('savedRecipePage', JSON.stringify(example))
          }>
          Open recipe
        </button>
      </Link>
    </li>
  );
};

export default RexipeExample;
