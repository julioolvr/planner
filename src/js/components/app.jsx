'use strict';

import React from 'react';
import Calendar from './calendar.jsx';
import NewAttendeeForm from './newAttendeeForm.jsx';

export default React.createClass({
  getInitialState() {
    return { attendees: ['Alice', 'Bob', 'Carol', 'Darryl', 'Emma', 'Fish', 'Gary', 'Herbert', 'Ivan', 'John', 'Kevin'] };
  },
  onNewAttendee(newAttendeeName) {
    let previousAttendees = this.state.attendees;
    this.setState({ attendees: [newAttendeeName].concat(previousAttendees) });
  },
  render() {
    return (
      <div>
        <div className="row">
          <h1>Plan!</h1>
        </div>
        <div className="row">
          <NewAttendeeForm onNewAttendee={this.onNewAttendee}/>
        </div>
        <div className="row">
          <Calendar attendees={this.state.attendees}/>
        </div>
      </div>
    );
  }
});
