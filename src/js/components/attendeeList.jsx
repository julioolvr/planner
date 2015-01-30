'use strict';

import React from 'react';
import Attendee from './attendee.jsx';

export default React.createClass({
  render() {
    let attendees = this.props.attendees.map(function(name) {
      return <Attendee name={name} key={name} />;
    });

    return (
      <div class="attendees">
        {attendees}
      </div>
    );
  }
});
