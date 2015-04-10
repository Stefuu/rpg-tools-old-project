/** @jsx React.DOM */

var React = require('react');

var QuickMenu = React.createClass({
  render: function() {
    return (
      <ul className="quick-menu">
        <li className="active">
          <span className="text">Features</span>
          <span className="state"></span>
        </li>
        <li>
          <span className="text">Style notes</span>
          <span className="state"></span>
        </li>
      </ul>
    );
  }
});

module.exports = QuickMenu;
