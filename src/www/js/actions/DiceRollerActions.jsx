/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var reflux = require('reflux');

var DiceRollerActions = reflux.createActions(
  [
    "rollDices",
    "addDice",
    "clearDices"
  ]
);

module.exports = DiceRollerActions;
