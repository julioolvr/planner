'use strict';

import routes from './routes.jsx';
import Router from 'react-router';
import React from 'react';

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
