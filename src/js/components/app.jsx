'use strict';

import React from 'react';
import Calendar from './calendar.jsx';
import NewAttendeeForm from './newAttendeeForm.jsx';

export default React.createClass({
  render() {
    return (
      <div>
        <div className="row">
          <h1>Plan!</h1>
        </div>
        <div className="row">
          <NewAttendeeForm />
        </div>
        <div className="row">
          <Calendar />
        </div>
      </div>
    );
  }
});
