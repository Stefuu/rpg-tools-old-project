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
	_handleBlur: function() {
		console.log(12345);
	},
  render: function() {
    return (
      <Menu effect={'slidein-spring'} method={'cick'} position={'br'} onBlur={this._handleBlur}>
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
