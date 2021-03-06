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
  componentWillMount: function(){
    if(window.shake){
      window.shake.startWatch(this._rollDices, 40);
    }
  },
  componentWillDestroy: function(){
    if(window.shake){
      window.shake.stopWatch();
    }
  },
  _onOverlayClick: function(){
    document.querySelector('.mfb-component--br').setAttribute('data-mfb-state', 'close');
    document.querySelector('.dicesOverlay').style.display = 'none';
  },
  _rollDices: function(){
    if(this.state.dices.length > 0){
      if(navigator.vibrate){  
        navigator.vibrate([50]);
      }
      DiceRollerActions.rollDices();
    }
  },
  _selectDicePositions: function(event){
    var elements = document.querySelectorAll('#dicesList li');
    Array.prototype.forEach.call(elements, function(el, i){
      el.classList.remove('dicePositionsSelected');
    });
    event.currentTarget.classList.add('dicePositionsSelected');
  },
  _removeDice: function(element){
    DiceRollerActions.removeDice($(element.currentTarget).index());
  },
  render: function() {
    var renderedDiceList = [];
    if(this.state.dices.length > 0){
      for(var i = 0; i < this.state.dices.length; ++i) {
        var currentResult = this.state.dices[i].result;
        var imgSrc = "assets/img/icon-d" + this.state.dices[i].type + ".png";
        renderedDiceList.push(
          <li onClick={this._removeDice}>
            <span>{currentResult}</span>
            <img src={imgSrc} className={currentResult ? 'dimImage' : ''}/>
          </li>);
      }
    }
    return (
      <div className="dice-roller">
        <div className="rollDiceContainer">
          <button className="rollDiceButton" onClick={this._rollDices}>Roll Dice</button>
          <div className="selectedDices">
            <ul id="selectedDicesList">
              {renderedDiceList}
            </ul>
            {this.state.dices.length <= 0 ? <span className="no-selected-dice">Select at least one dice.</span> : false}
          </div>
          <div className="rollDiceResult">
            <div className="label">
              <span>TOTAL</span>
            </div>
            <div className="result">
              <span>{this.state.dicesSum}</span>
            </div>
          </div>
        </div>
        <div className="dicesOverlay" onClick={this._onOverlayClick}></div>
        <DiceList />

      </div>
    );
  }
});

module.exports = DiceRoller;
