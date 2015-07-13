/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var React = require('react');
var BattleMap = require('./../components/BattleMap.jsx');

var BattleMapScreen = React.createClass({
  render: function() {
    return (
      <div>
        <BattleMap />
      </div>
    );
  }
});

module.exports = BattleMapScreen;
