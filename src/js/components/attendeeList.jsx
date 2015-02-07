'use strict';

import React from 'react/addons';
import Attendee from './attendee.jsx';

let TransitionGroup = React.addons.CSSTransitionGroup;

export default React.createClass({
  render() {
    let attendees = this.props.attendees.map(function(name) {
      return <Attendee name={name} key={name} />;
    }).toArray();

    return (
      <div className="attendees">
        <TransitionGroup transitionName="add-attendee">
          {attendees}
        </TransitionGroup>
      </div>
    );
  }
});
