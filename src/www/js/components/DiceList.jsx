/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var React = require('react');
var DiceRollerStore = require('./../stores/DiceRollerStore.jsx');
var DiceRollerActions = require('./../actions/DiceRollerActions.jsx');

var DiceList = React.createClass({
  _addDice: function(event){
    DiceRollerActions.addDice(event.currentTarget.id);
  },
  render: function() {
    return (
      <div className="listDiceContainer">
        <ul id="dicesList">
          <li id="4" onClick={this._addDice}>
            <img src="assets/img/icon-d4.png" />
          </li>
          <li id="6" onClick={this._addDice}>
            <img src="assets/img/icon-d6.png" />
          </li>
          <li id="8" onClick={this._addDice}>
            <img src="assets/img/icon-d8.png" />
          </li>
          <li id="10" onClick={this._addDice}>
            <img src="assets/img/icon-d10.png" />
          </li>
          <li id="12" onClick={this._addDice}>
            <img src="assets/img/icon-d12.png" />
          </li>
          <li id="20" onClick={this._addDice}>
            <img src="assets/img/icon-d20.png" />
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = DiceList;
