'use strict';

import React from 'react';

export default React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    var newAttendeeName = this.refs.name.getDOMNode().value.trim();
    if (!newAttendeeName) { return; }
    this.props.onNewAttendee(newAttendeeName);
    this.refs.name.getDOMNode().value = '';
    return;
  },
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row collapse">
          <div className="small-8 columns">
            <input type="text" placeholder="Who are you?" className="form-control" ref="name"/>
          </div>
          <div className="small-4 columns">
            <button className="button postfix">Count me in!</button>
          </div>
        </div>
      </form>
    );
  }
});
