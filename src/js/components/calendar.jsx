'use strict';

import React from 'react';
import Swipe from 'react-swipe';
import AttendeeList from './attendeeList.jsx';
import Day from './day.jsx';

export default React.createClass({
  onDayChanged(index) {
    this.props.onDayChanged(this.props.dates.get(index).get('date'));
  },
  render() {
    let days = this.props.dates.map(date => <Day key={date.get('date')} date={date.get('date')} attendees={date.get('attendees')}/>).toArray();

    return (
      <div className="calendar">
        <Swipe continuous={false} callback={this.onDayChanged}>
          {days}
        </Swipe>
      </div>
    );
  }
});
