/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var Reflux = require('reflux');
var Store = require('store');
var DiceRollerActions = require('./../actions/DiceRollerActions.js');

var DiceRollerStore = Reflux.createStore({
  listenables: [DiceRollerActions],

  rollDices: function(){
    console.log('rollDices');
  },
  addDice: function(){
    console.log('addDice');
  },
  clearDices: function(){
    console.log('clearDices');
  }
});

module.exports = DiceRollerStore;
