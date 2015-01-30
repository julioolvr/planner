'use strict';

import React from 'react';
import Attendee from './attendee.jsx';

export default React.createClass({
  render() {
    let attendees = ['Alice', 'Bob', 'Carol', 'Darryl', 'Emma', 'Fish', 'Gary', 'Herbert', 'Ivan', 'John', 'Kevin'].map(function(name) {
      return <Attendee name={name} />;
    });

    return (
      <div class="attendees">
        {attendees}
      </div>
    );
  }
});
