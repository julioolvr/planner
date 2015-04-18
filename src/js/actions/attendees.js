import Dispatcher from '../dispatcher/plannerDispatcher';

export default {
  addAttendee: function (planId, date, name) {
    Dispatcher.handleViewAction({
      type: 'newAttendee',
      planId,
      date,
      name
    });
  }
};
