'use strict';

import React from 'react';
import Swipe from 'react-swipe';
import AttendeeList from './attendeeList.jsx';

export default React.createClass({
  render() {
    return (
      <div className="calendar">
        <Swipe continuous={false}>
          <div className="day">
            <div className="day--date">
              Friday 9/13
            </div>
            <AttendeeList attendees={this.props.attendees}/>
          </div>
          <div className="day">
            <div className="day--date">
              Saturday 9/14
            </div>
            <AttendeeList attendees={this.props.attendees}/>
          </div>
          <div className="day">
            <div className="day--date">
              Sunday 9/15
            </div>
            <AttendeeList attendees={this.props.attendees}/>
          </div>
          <div className="day">
            <div className="day--date">
              Monday 9/16
            </div>
            <AttendeeList attendees={this.props.attendees}/>
          </div>
        </Swipe>
      </div>
    );
  }
});
