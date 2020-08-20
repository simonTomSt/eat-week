import React from 'react';
import Desktop from '../Desktop/Desktop';
import RecipesDatabase from '../RecipesDatabase/RecipesDatabase';
import { Switch, Route } from 'react-router-dom';
import RecipePage from '../../genericComponents/RecipePage/RecipePage';
import Filters from '../../userSettingsComponents/Filters/Filters';
import './Interface.scss';
const Interface = () => {
  return (
    <section className="interface container">
      <Switch>
        <Route path="/dashboard/desktop" exact component={Desktop} />
        <Route path="/dashboard/recipes" exact component={RecipesDatabase} />
        <Route path="/dashboard/recipe" component={RecipePage} />
        <Route path="/dashboard/filters" component={Filters} />
      </Switch>
    </section>
  );
};

export default Interface;
