/** @jsx React.DOM */

var React = require('react');
var QuickMenu = require('./QuickMenu.jsx');

var Header = React.createClass({
  render: function() {
    return (
      <div className="main-header">
        <div className="top">
          <div className="menu">&#9776;</div>
          <div className="appName">
            <span>RPG Tools</span>
          </div>
        </div>
        <QuickMenu />
      </div>
    );
  }
});

module.exports = Header;
