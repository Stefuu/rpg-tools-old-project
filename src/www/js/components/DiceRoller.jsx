/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var React = require('react');
var DiceList = require('./DiceList.jsx')

var DiceRoller = React.createClass({
  componentWillMount: function(){
    this.setState({diceResult : 0});
  },
  _rollDice: function(){
    this.setState({diceResult : Math.round(Math.random() * (document.querySelector('#dicesList li.dicePositionsSelected').id - 1) + 1)});
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
          <button className="rollDiceButton" onClick={this._rollDice}>Roll Dice</button>
          <div className="selectedDices"></div>
          <div className="rollDiceResult">
            <div className="label">
              <span>TOTAL</span>
            </div>
            <div className="result">
              <span>{this.state.diceResult}</span>
            </div>
          </div>
        </div>
        <DiceList />
      </div>
    );
  }
});

module.exports = DiceRoller;
