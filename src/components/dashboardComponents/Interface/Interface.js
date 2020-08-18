import React from 'react';
import Desktop from '../Desktop/Desktop';
import RecipesDatabase from '../RecipesDatabase/RecipesDatabase';
const Interface = () => {
  return (
    <section className="interface">
      <Desktop />
      <RecipesDatabase />
    </section>
  );
};

export default Interface;
