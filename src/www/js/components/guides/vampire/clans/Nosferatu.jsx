/** @jsx React.DOM */

var React = require('react');

var Nosferatu = React.createClass({

  render: function() {
    return (
      <div className="nosferatu">
        <span>
          Nosferatu é um clan bem legal.
        </span>
      </div>
    );
  }
});

module.exports = Nosferatu;
