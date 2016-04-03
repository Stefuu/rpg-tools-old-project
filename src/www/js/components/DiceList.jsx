/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var React = require('react');
var DiceRollerStore = require('./../stores/DiceRollerStore.jsx');
var DiceRollerActions = require('./../actions/DiceRollerActions.jsx');

var Menu = require('react-mfb').Menu;
var MainButton = require('react-mfb').MainButton;
var ChildButton = require('react-mfb').ChildButton;

var DiceList = React.createClass({
  componentDidMount: function(){
    document.querySelector('.mfb-component__button--main').addEventListener('click', function(){
      var element = document.querySelector('.dicesOverlay');
      var style = window.getComputedStyle(element);
      var display = style.getPropertyValue('display');
      if(display === 'none') {
        document.querySelector('.dicesOverlay').style.display = 'block';
        document.querySelector('.mfb-component--br').setAttribute('data-mfb-state', 'open');
      }
      else {
        document.querySelector('.dicesOverlay').style.display = 'none';
        document.querySelector('.mfb-component--br').setAttribute('data-mfb-state', 'close');
      }
    });
  },
  render: function() {
    return (
      <Menu effect={'slidein-spring'} position={'br'} >
        <MainButton iconResting="ion-plus-round" iconActive="ion-close-round" />
        <ChildButton
          className="icon-d100"
          onClick={DiceRollerActions.addDice.bind(null, 100)}
          label="D100"
          href="#" />
        <ChildButton
          className="icon-d20"
          onClick={DiceRollerActions.addDice.bind(null, 20)}
          label="D20"
          href="#" />
        <ChildButton
          className="icon-d10"
          onClick={DiceRollerActions.addDice.bind(null, 10)}
          label="D10"
          href="#" />
        <ChildButton
          className="icon-d8"
          onClick={DiceRollerActions.addDice.bind(null, 8)}
          label="D8"
          href="#" />
        <ChildButton
          className="icon-d6"
          onClick={DiceRollerActions.addDice.bind(null, 6)}
          label="D6"
          href="#" />
        <ChildButton
          className="icon-d4"
          onClick={DiceRollerActions.addDice.bind(null, 4)}
          label="D4"
          href="#" />
    </Menu>
    );
  }
});

module.exports = DiceList;
