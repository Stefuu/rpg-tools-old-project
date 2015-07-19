/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var Reflux = require('reflux');
var Store = require('store');
var _ = require('lodash');
var DiceRollerActions = require('./../actions/DiceRollerActions.jsx');

var initialState = {
  dices: [4, 4, 20],
  results: [],
  dicesSum: 0
};

var currentState = {};

var loadState = function(){
  var lastState = Store.get('DiceRoller:state');
  if(typeof lastState === "undefined"){
    lastState = JSON.stringify(_.cloneDeep(initialState));
  }
  currentState = JSON.parse(lastState);
  return currentState;
};

var saveState = function(state){
  Store.set('DiceRoller:state', JSON.stringify(state));
};

var DiceRollerStore = Reflux.createStore({
  listenables: [DiceRollerActions],
  getInitialState: function(){
    return loadState();
  },

  onRollDices: function(){
    currentState.results = [];
    currentState.dicesSum = 0;
    for(var i = 0; i < currentState.dices.length; ++i){
      var diceREsult = Math.round(Math.random() * (currentState.dices[i] - 1) + 1);
      currentState.results.push(diceREsult);
      currentState.dicesSum += diceREsult;
    }
    console.log('Resultados:', currentState.results);
    this.trigger(currentState);
  },
  onAddDice: function(dicePositions){
    currentState.dices.push(parseInt(dicePositions));
    currentState.dices.sort(function(a, b){return a-b;});
    this.trigger(currentState);
  },
  onClearDices: function(){
    console.log('clearDices');
  }
});

module.exports = DiceRollerStore;
