/** @jsx React.DOM */

var React = require('react');

var QuickMenu = React.createClass({
  render: function() {
    return (
      <ul className="quick-menu">
        <li className="DiceRoller active">
          <span className="text">Dice Roller</span>
          <span className="state"></span>
        </li>
        <li className="BattleMap">
          <span className="text">Battle Map</span>
          <span className="state"></span>
        </li>
      </ul>
    );
  }
});

module.exports = QuickMenu;
