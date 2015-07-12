/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;

var MainWindow = require('./screens/MainWindow.jsx');
var DiceRoller = require('./screens/DiceRollerScreen.jsx');

var App = require('./components/App.jsx');

var Routes = {
  routes: (<Route name="app" path="/" handler={App}>
    <Route name="diceroller" path="/diceroller" handler={DiceRoller}/>
    <DefaultRoute handler={MainWindow}/>
  </Route>),
  run: function(){
    Router.run(this.routes, function(Handler){
      React.render(<Handler />, document.getElementById('MainWindow'));
    });
  }
};

module.exports = Routes;
