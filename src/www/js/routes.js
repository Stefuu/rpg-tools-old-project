/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;

var MainWindow = require('./screens/MainWindow.jsx');
var DiceRollerScreen = require('./screens/DiceRollerScreen.jsx');
var BattleMapScreen = require('./screens/BattleMapScreen.jsx');
var GuideScreen = require('./screens/GuideScreen.jsx');

/*Guides*/
var Vampire = require('./components/guides/Vampire.jsx');

var App = require('./components/App.jsx');

var Routes = {
  routes: (<Route name="app" path="/" handler={App}>
    <Route name="diceroller" path="diceroller" handler={DiceRollerScreen}/>
    <Route name="battlemap" path="battlemap" handler={BattleMapScreen} />
    <Route name="guide" path="guide" handler={GuideScreen} >
      <Route name="vampire" path="vampire" handler={Vampire} />
    </Route>
    <DefaultRoute handler={MainWindow}/>
  </Route>),
  run: function(){
    Router.run(this.routes, function(Handler){
      React.render(<Handler />, document.getElementById('MainWindow'));
    });
  }
};

module.exports = Routes;
