/** @jsx React.DOM */

var React = require('react');

var DiceList = React.createClass({
  componentWillMount: function(){
    this.setState({diceResult : 0});
  },
  _addDice: function(event){
    console.log(event);
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
