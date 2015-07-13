/** @jsx React.DOM */

var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <div className="main-header">
        <div className="menu">&#9776;</div>
        <div className="appName">
          <span>RPG Tools</span>
        </div>
      </div>
    );
  }
});

module.exports = Header;
