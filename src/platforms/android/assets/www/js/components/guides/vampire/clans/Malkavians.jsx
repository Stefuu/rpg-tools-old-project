/** @jsx React.DOM */

var React = require('react');

var Malkavians = React.createClass({

  render: function() {
    return (
      <div className="malkavians">
        <span>
          Malkavians é um clan bem legal.
        </span>
      </div>
    );
  }
});

module.exports = Malkavians;
