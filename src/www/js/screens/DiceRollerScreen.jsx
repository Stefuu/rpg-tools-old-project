/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var React = require('react');
var Header = require('./../components/Header.jsx');
var DiceRoller = require('./../components/DiceRoller.jsx');
var Footer = require('./../components/Footer.jsx');

var DiceRollerScreen = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <DiceRoller />
        <Footer />
      </div>
    );
  }
});

module.exports = DiceRollerScreen;
