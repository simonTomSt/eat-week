import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RecipesDatabase.scss';
import Loading from '../../genericComponents/Loading/Loading';
import ReciepeExample from '../../genericComponents/RecipeExample/RecipeExample';
const RecipesDatabase = () => {
  const [recipesData, setRecipesData] = useState(false);
  useEffect(() => {
    const API = {
      url: 'https://api.spoonacular.com/recipes',
      key: '9ed3dca3f1cf4a6c91fcd185d910fe63',
      from: 0,
      amount: 2,
      query: 'dinner',
    };
    axios
      .get(
        `${API.url}/random?number=${API.amount}&tags=vegetarian/information&apiKey=${API.key}`
      )
      .then((res) => {
        const respRecipes = res.data;
        setRecipesData(respRecipes);
      });
  }, []);

  return (
    <section className="examples">
      <ul className="examples__list">
        {recipesData === false ? (
          <Loading />
        ) : (
          recipesData.recipes.map((recipe) => (
            <ReciepeExample example={recipe} key={recipe.id} />
          ))
        )}
      </ul>
    </section>
  );
};

export default RecipesDatabase;
