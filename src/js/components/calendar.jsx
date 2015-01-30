'use strict';

import React from 'react';
import AttendeeList from './attendeeList.jsx';

export default React.createClass({
  render() {
    return (
      <div className="calendar">
        <div className="day">
          Friday 9/13
        </div>
        <AttendeeList attendees={this.props.attendees}/>
      </div>
    );
  }
});
