'use strict';

import React from 'react';
import Router from 'react-router';
import Immutable from 'immutable';

import Calendar from './calendar.jsx';
import NewAttendeeForm from './newAttendeeForm.jsx';

import PlanStore from '../stores/planStore';

import AttendeeActions from '../actions/attendees';

export default React.createClass({
  mixins: [Router.State],
  getInitialState() {
    return Immutable.fromJS({
      plan: PlanStore.getPlanById(this.getParams().planId),
      selectedDay: 'Friday 9/13'
    });
  },
  onDayChanged(newDay) {
    let nextState = this.state.set('selectedDay', newDay);
    this.replaceState(nextState);
  },
  componentWillMount() {
    PlanStore.addChangeListener(this.onStoreChange);
  },
  componentWillUnmount() {
    PlanStore.removeChangeListener(this.onStoreChange);
  },
  onStoreChange() {
    this.replaceState(
      this.state.set('plan', PlanStore.getPlanById(this.getParams().planId))
    );
  },
  onNewAttendee(newAttendeeName) {
    AttendeeActions.addAttendee(this.getParams().planId, this.state.get('selectedDay'), newAttendeeName);
  },
  render() {
    return (
      <div>
        <div className="row">
          <h1 className="left">Plan!</h1>
          <Router.Link to="plan/new" className="small button right">New plan!</Router.Link>
        </div>
        <div className="row">
          <NewAttendeeForm onNewAttendee={this.onNewAttendee}/>
        </div>
        <div className="row">
          <Calendar dates={this.state.get('plan').get('dates')} onDayChanged={this.onDayChanged}/>
        </div>
      </div>
    );
  }
});
