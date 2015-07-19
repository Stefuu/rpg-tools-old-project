/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var React = require('react');
var Orientation = require('../modules/Orientation.js');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
  render: function(){
    return <RouteHandler />;
  }
});

module.exports = App;
