/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var React = require('react');
var Header = require('./../components/Header.jsx');
var BattleMap = require('./../components/BattleMap.jsx');
var Footer = require('./../components/Footer.jsx');

var BattleMapScreen = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <BattleMap />
        <Footer />
      </div>
    );
  }
});

module.exports = BattleMapScreen;
