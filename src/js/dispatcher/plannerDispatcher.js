'use strict';

import { Dispatcher } from 'flux';

class AppDispatcher extends Dispatcher {
  handleServerAction(action) {
    this.dispatch({
      source: 'server',
      action
    });
  }
  handleViewAction(action) {
    this.dispatch({
      source: 'view',
      action
    });
  }
}

export default new AppDispatcher();
