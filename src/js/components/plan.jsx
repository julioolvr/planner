'use strict';

import React from 'react';
import Router from 'react-router';
import Immutable from 'immutable';

import Calendar from './calendar.jsx';
import NewAttendeeForm from './newAttendeeForm.jsx';

export default React.createClass({
  mixins: [Router.State],
  getInitialState() {
    return Immutable.fromJS({
      dates: [
        { date: 'Friday 9/13', attendees:   ['Cristy', 'Maryjo', 'Dorethea', 'Tajuana', 'Evon']},
        { date: 'Saturday 9/14', attendees: ['Karine', 'Sparkle', 'Madalene', 'Donya', 'Lorri', 'Marlys', 'Wade', 'Rina', 'Bruce', 'Jaclyn', 'Joslyn', 'Chanel', 'Floria', 'Calista', 'Bulah']},
        { date: 'Sunday 9/15', attendees:   ['America', 'Henrietta', 'Clemente', 'Terica', 'Agustina']},
        { date: 'Monday 9/16', attendees:   ['Joleen', 'Tillie', 'Foster', 'Trinh', 'Ulrike', 'Aundrea', 'Alphonse', 'Sherwood', 'Marco', 'Lauretta']},
        { date: 'Tuesday 9/15', attendees:  ['Kortney', 'Micaela', 'Theressa', 'Jed', 'Londa', 'Arron', 'Myesha', 'Beula', 'Katharyn', 'Yaeko']}
      ],
      selectedDay: 'Friday 9/13'
    });
  },
  onDayChanged(newDay) {
    let nextState = this.state.set('selectedDay', newDay);

    this.replaceState(nextState);
  },
  onNewAttendee(newAttendeeName) {
    let selectedDay = this.state.get('selectedDay'),
        index = this.state.get('dates').findIndex(date => date.get('date') === selectedDay),
        nextState = this.state.updateIn(['dates', index, 'attendees'], attendees => attendees.push(newAttendeeName));

    this.replaceState(nextState);
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
          <Calendar dates={this.state.get('dates')} onDayChanged={this.onDayChanged}/>
        </div>
      </div>
    );
  }
});
