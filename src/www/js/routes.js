/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;

var MainWindow = require('./screens/MainWindow.jsx');

var Routes = {
  routes: (
    <Route name="MainWindow" path="/" handler={MainWindow}>
    <DefaultRoute handler={MainWindow}/>
  </Route>),
  run: function(){
    Router.run(this.routes, function(Handler){
      React.render(<Handler />, document.getElementById('MainWindow'));
    });
  }
};

module.exports = Routes;
