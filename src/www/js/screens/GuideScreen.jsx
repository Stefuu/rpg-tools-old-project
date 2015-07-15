/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var React = require('react');
var Guide = require('./../components/Guide.jsx');

var GuideScreen = React.createClass({
  render: function() {
    return (
      <div>
        <Guide />
      </div>
    );
  }
});

module.exports = GuideScreen;
