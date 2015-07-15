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

/*Clans*/
var Clans = require('./components/guides/Clans.jsx');
var Ventrue = require('./components/guides/clans/Ventrue.jsx');

var App = require('./components/App.jsx');

var Routes = {
  routes: (<Route name="app" path="/" handler={App}>
    <Route name="diceroller" path="diceroller" handler={DiceRollerScreen}/>
    <Route name="battlemap" path="battlemap" handler={BattleMapScreen} />
    <Route name="guides" path="guides" handler={GuideScreen} />
    <Route name="vampire" path="guides/vampire" handler={Vampire} />
    <Route name="clans" path="guides/vampire/clans" handler={Clans} />
    <Route name="ventrue" path="guides/vampire/clans/ventrue" handler={Ventrue} />
    <DefaultRoute handler={MainWindow}/>
  </Route>),
  run: function(){
    Router.run(this.routes, function(Handler){
      React.render(<Handler />, document.getElementById('MainWindow'));
    });
  }
};

module.exports = Routes;
