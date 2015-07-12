/** @jsx React.DOM */

var React = require('react');

var DiceRoller = React.createClass({
  componentWillMount: function(){
    this.setState({diceResult : 0});
    this.setState({dicePositions : 10});
  },
  _rollDice(){
    this.setState({diceResult : Math.round(Math.random() * (this.state.dicePositions - 1) + 1)});
  },
  render: function() {
    return (
      <div className="dice-roller">
      <button onClick={this._rollDice}>Roll Dice</button>
      <span>{this.state.diceResult}</span>
      <ul id="dicesList">
        <li>4</li>
        <li>6</li>
        <li>10</li>
        <li>100</li>
      </ul>
      </div>
    );
  }
});

module.exports = DiceRoller;
