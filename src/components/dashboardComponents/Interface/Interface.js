import React from 'react';
import Desktop from '../Desktop/Desktop';
import RecipesDatabase from '../RecipesDatabase/RecipesDatabase';
import { Switch, Route } from 'react-router-dom';
import './Interface.scss';
const Interface = () => {
  return (
    <section className="interface ">
      <Switch>
        <Route path="/dashboard/desktop" exact component={Desktop} />
        <Route path="/dashboard/recipes" exact component={RecipesDatabase} />
      </Switch>
    </section>
  );
};

export default Interface;
