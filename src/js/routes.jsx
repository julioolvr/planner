'use strict';

import Router from 'react-router';
import React from 'react';

import App from './components/app.jsx';
import Plan from './components/plan.jsx';
import PlanNew from './components/planNew.jsx'

let Route = Router.Route,
    DefaultRoute = Router.DefaultRoute;

export default (
  <Route name="app" path="/" handler={App}>
    <Route name="plan/new" handler={PlanNew}/>
    <Route name="plan" path="plan/:planId" handler={Plan}/>
    <DefaultRoute handler={PlanNew}/>
  </Route>
);
