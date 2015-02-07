'use strict';

import React from 'react';
import AttendeeList from './attendeeList.jsx';

export default React.createClass({
  render() {
    return (
      <div className="day">
        <div className="day--date">
          {this.props.date}
        </div>
        <AttendeeList attendees={this.props.attendees}/>
      </div>
    );
  }
});
