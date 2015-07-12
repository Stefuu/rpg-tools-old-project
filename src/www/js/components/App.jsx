/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var React = require('react');
var Orientation = require('../modules/Orientation.js');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
  _setBodyFont: function() {
    if( Orientation.getOrientationByScreenSize() == 'portrait' ){
      document.querySelector('body').style.fontSize = parseInt(window.innerHeight * 0.2) + 'px';
    }else{
      document.querySelector('body').style.fontSize = parseInt(window.innerWidth * 0.16) + 'px';
    }
  },
  componentDidMount: function(){
    // Seta a font-size do body inicial
    this._setBodyFont();
  },
  render: function(){
    return <RouteHandler />;
  }
});

module.exports = App;
