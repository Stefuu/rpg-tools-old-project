/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var React = require('react');
var Orientation = require('../modules/Orientation.js');
var RouteHandler = require('react-router').RouteHandler;
var Header = require('../components/Header.jsx');
var Footer = require('../components/Footer.jsx');


var App = React.createClass({
  render: function(){
    return (
    <section>
      <Header />
      <div className="content">
        <RouteHandler />
      </div>
      <Footer />
    </section>
    );
  }
});

module.exports = App;
