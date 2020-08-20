import React from 'react';
import './RecipePage.scss';
import graphicImg from '../../../images/RecipeExample/graphImg.png';

const RecipePage = (props) => {
  const initRecipe = JSON.parse(localStorage.getItem('savedRecipePage'));
  const {
    id,
    title,
    image,
    analyzedInstructions,
    extendedIngredients,
    diets,
  } = initRecipe;

  return (
    <section className="recipe">
      <button className="primary-btn"></button>
      <h2 className="recipe__title">{title}</h2>
      <div className="recipe_features">
        <img
          src={image ? image : graphicImg}
          alt={title}
          className="recipe__img"
        />
        <ul className="recipe__info"></ul>
      </div>
      <h3>Ingredients</h3>
      <ul className="recipe__list">
        {extendedIngredients.map(({ original }, index) => (
          <li key={index}>{original}</li>
        ))}
      </ul>
      <h3>Preparation</h3>
      <ul className="recipe__list">
        {analyzedInstructions[0].steps &&
          analyzedInstructions[0].steps.map(({ number, step }) => (
            <ol key={number}>
              <span>{number}. </span>
              {step}
            </ol>
          ))}
      </ul>
    </section>
  );
};

export default RecipePage;
