/** @jsx React.DOM */

var React = require('react');

var DiceRoller = React.createClass({
  componentWillMount: function(){
    this.setState({diceResult : 0});
    this.setState({dicePositions : 10});
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
          <br/>
          <span className="rollDiceResult">{this.state.diceResult}</span>
        </div>
        <div className="listDiceContainer">
          <ul id="dicesList">
            <li id="4" onClick={this._selectDicePositions}>
              <img src="assets/img/icon-d4.png" />
            </li>
            <li id="6" onClick={this._selectDicePositions}>
              <img src="assets/img/icon-d6.png" />
            </li>
            <li id="8" onClick={this._selectDicePositions}>
              <img src="assets/img/icon-d8.png" />
            </li>
            <li id="10" onClick={this._selectDicePositions} className="dicePositionsSelected">
              <img src="assets/img/icon-d10.png" />
            </li>
            <li id="12" onClick={this._selectDicePositions}>
              <img src="assets/img/icon-d12.png" />
            </li>
            <li id="20" onClick={this._selectDicePositions}>
              <img src="assets/img/icon-d20.png" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = DiceRoller;
