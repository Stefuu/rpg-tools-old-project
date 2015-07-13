/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var React = require('react');
var DiceRoller = require('./../components/DiceRoller.jsx');

var DiceRollerScreen = React.createClass({
  render: function() {
    return (
      <DiceRoller />
    );
  }
});

module.exports = DiceRollerScreen;
