/** @jsx React.DOM */

var React = require('react');

var DiceRoller = React.createClass({
  componentWillMount: function(){
    this.setState({diceResult : 0});
    this.setState({dicePositions : 10});
  },
  _rollDice: function(){
    this.setState({diceResult : Math.round(Math.random() * (this.state.dicePositions - 1) + 1)});
  },
  render: function() {
    return (
      <div className="dice-roller">
        <div className="rollDiceContainer">
          <button className="rollDiceButton" onClick={this._rollDice}>Roll Dice</button>
          <br/>
          <span className="rollDiceResult">{this.state.diceResult}</span>
        </div>
        <div className="listDiceContainer">
          <ul id="dicesList">
            <li><img src="assets/img/icon-d4.png" /></li>
            <li><img src="assets/img/icon-d6.png" /></li>
            <li><img src="assets/img/icon-d8.png" /></li>
            <li><img src="assets/img/icon-d10.png" /></li>
            <li><img src="assets/img/icon-d12.png" /></li>
            <li><img src="assets/img/icon-d20.png" /></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = DiceRoller;
