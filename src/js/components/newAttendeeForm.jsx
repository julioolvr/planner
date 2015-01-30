'use strict';

import React from 'react';

export default React.createClass({
  render() {
    return (
      <form>
        <div className="row collapse">
          <div className="small-8 columns">
            <input type="text" placeholder="Who are you?" className="form-control"/>
          </div>
          <div className="small-4 columns">
            <button className="button postfix">Count me in!</button>
          </div>
        </div>
      </form>
    );
  }
});
