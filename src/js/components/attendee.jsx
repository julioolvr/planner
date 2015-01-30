'use strict';

import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="attendee">{this.props.name}</div>
    );
  }
});
