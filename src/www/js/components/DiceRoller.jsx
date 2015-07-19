/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var React = require('react');
var Reflux = require('reflux');
var DiceList = require('./DiceList.jsx');
var DiceRollerStore = require('./../stores/DiceRollerStore.jsx');
var DiceRollerActions = require('./../actions/DiceRollerActions.jsx');

var DiceRoller = React.createClass({
  mixins: [Reflux.connect(DiceRollerStore)],
  _rollDices: function(){
    DiceRollerActions.rollDices();
  },
  _selectDicePositions: function(event){
    var elements = document.querySelectorAll('#dicesList li');
    Array.prototype.forEach.call(elements, function(el, i){
      el.classList.remove('dicePositionsSelected');
    });
    event.currentTarget.classList.add('dicePositionsSelected');
  },
  render: function() {
    return (
      <div className="dice-roller">
        <div className="rollDiceContainer">
          <button className="rollDiceButton" onClick={this._rollDices}>Roll Dice</button>
          <div className="selectedDices"></div>
          <div className="rollDiceResult">
            <div className="label">
              <span>TOTAL</span>
            </div>
            <div className="result">
              <span>{this.state.dicesSum}</span>
            </div>
          </div>
        </div>
        <DiceList />
      </div>
    );
  }
});

module.exports = DiceRoller;
