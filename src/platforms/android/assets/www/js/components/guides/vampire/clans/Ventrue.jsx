/** @jsx React.DOM */

var React = require('react');

var Ventrue = React.createClass({

  render: function() {
    return (
      <div className="ventrue">
        <span>
          Ventrue é um clan bem legal, pena que o pigão usa ele.
        </span>
      </div>
    );
  }
});

module.exports = Ventrue;
