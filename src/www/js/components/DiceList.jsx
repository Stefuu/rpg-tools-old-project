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
  _addDice: function(event){
    DiceRollerActions.addDice(event.currentTarget.id);
  },
  render: function() {
    return (
      <Menu effect={'slidein-spring'} method={'hover'} position={'br'}>
				<MainButton iconResting="ion-plus-round" iconActive="ion-close-round" />
				<ChildButton
					//onClick={function(e){ console.log(e); e.preventDefault(); }}
					icon="ion-social-github"
					//label="View on Github"
					href="#" />
				<ChildButton
					icon="ion-social-octocat"
					//label="Follow me on Github"
					href="#" />
				<ChildButton
					icon="ion-social-twitter"
					//label="Share on Twitter"
					href="#" />
				<ChildButton
					//onClick={function(e){ console.log(e); e.preventDefault(); }}
					icon="ion-social-github"
					//label="View on Github"
					href="#" />
				<ChildButton
					icon="ion-social-octocat"
					//label="Follow me on Github"
					href="#" />
				<ChildButton
					icon="ion-social-twitter"
					//label="Share on Twitter"
					href="#" />
    </Menu>
    );
  }
});

module.exports = DiceList;
