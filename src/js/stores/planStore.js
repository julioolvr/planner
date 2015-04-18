'use strict';

import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/plannerDispatcher';
import Immutable from 'immutable';

let plans = Immutable.fromJS({
  1: {
    dates: [
      { date: 'Friday 9/13', attendees:   ['Cristy', 'Maryjo', 'Dorethea', 'Tajuana', 'Evon']},
      { date: 'Saturday 9/14', attendees: ['Karine', 'Sparkle', 'Madalene', 'Donya', 'Lorri', 'Marlys', 'Wade', 'Rina', 'Bruce', 'Jaclyn', 'Joslyn', 'Chanel', 'Floria', 'Calista', 'Bulah']},
      { date: 'Sunday 9/15', attendees:   ['America', 'Henrietta', 'Clemente', 'Terica', 'Agustina']},
      { date: 'Monday 9/16', attendees:   ['Joleen', 'Tillie', 'Foster', 'Trinh', 'Ulrike', 'Aundrea', 'Alphonse', 'Sherwood', 'Marco', 'Lauretta']},
      { date: 'Tuesday 9/15', attendees:  ['Kortney', 'Micaela', 'Theressa', 'Jed', 'Londa', 'Arron', 'Myesha', 'Beula', 'Katharyn', 'Yaeko']}
    ]
  }
});

class PlanStore extends EventEmitter {
  addChangeListener(callback) {
    this.on('change', callback);
  }
  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
  getPlanById(id) {
    return plans.get(id);
  }
  getAll() {
    return plans;
  }
}

let planStore = new PlanStore();

planStore.dispatchToken = Dispatcher.register(function (payload) {
  let actions = {
    newAttendee: function (payload) {
      let planId = payload.action.planId,
        plan = planStore.getPlanById(planId),
        selectedDate = payload.action.date,
        index = plan.get('dates').findIndex(date => date.get('date') === selectedDate);

      plans = plans.updateIn([planId, 'dates', index, 'attendees'], attendees => attendees.push(payload.action.name));

      planStore.emit('change');
    }
  };

  actions[payload.action.type] && actions[payload.action.type](payload);
});

export default planStore;
