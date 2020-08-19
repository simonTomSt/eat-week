import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RecipesDatabase.scss';
import Loading from '../../genericComponents/Loading/Loading';
import ReciepeExample from '../../genericComponents/RecipeExample/RecipeExample';
const RecipesDatabase = () => {
  const [recipesData, setRecipesData] = useState(false);
  useEffect(() => {
    const appKey = '9ed3dca3f1cf4a6c91fcd185d910fe63';
    axios
      .get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${appKey}`)
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
          recipesData.results.map((result) => (
            <ReciepeExample example={result} key={result.id} />
          ))
        )}
      </ul>
    </section>
  );
};

export default RecipesDatabase;
