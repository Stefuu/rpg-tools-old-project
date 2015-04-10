/** @jsx React.DOM */

var React = require('react');

var DiceRoller = React.createClass({
  render: function() {
    return (
      <div className="dice-roller">
        Dice Roller!
      </div>
    );
  }
});

module.exports = DiceRoller;
