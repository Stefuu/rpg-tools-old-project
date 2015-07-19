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

/* Guides */
var Vampire = require('./components/guides/vampire/Vampire.jsx');

  /* Clans */
  var Clans = require('./components/guides/vampire/Clans.jsx');
    var Assamita = require('./components/guides/vampire/clans/Assamita.jsx');
    var Brujah = require('./components/guides/vampire/clans/Brujah.jsx');
    var Gangrel = require('./components/guides/vampire/clans/Gangrel.jsx');
    var Giovanni = require('./components/guides/vampire/clans/Giovanni.jsx');
    var Malkavians = require('./components/guides/vampire/clans/Malkavians.jsx');
    var Nosferatu = require('./components/guides/vampire/clans/Nosferatu.jsx');
    var Ravnos = require('./components/guides/vampire/clans/Ravnos.jsx');
    var Seguidores = require('./components/guides/vampire/clans/Seguidores.jsx');
    var Sombra = require('./components/guides/vampire/clans/Sombra.jsx');
    var Toreador = require('./components/guides/vampire/clans/Toreador.jsx');
    var Tremere = require('./components/guides/vampire/clans/Tremere.jsx');
    var Ventrue = require('./components/guides/vampire/clans/Ventrue.jsx');

  /* Disciplinas */
  var Disciplinas = require('./components/guides/vampire/Disciplinas.jsx');
    var Animalismo = require('./components/guides/vampire/disciplinas/Animalismo.jsx');
    var Auspicios = require('./components/guides/vampire/disciplinas/Auspicios.jsx');
    var Dominacao = require('./components/guides/vampire/disciplinas/Dominacao.jsx');
    var Fortitude = require('./components/guides/vampire/disciplinas/Fortitude.jsx');
    var Metamorfose = require('./components/guides/vampire/disciplinas/Metamorfose.jsx');
    var Ofuscacao = require('./components/guides/vampire/disciplinas/Ofuscacao.jsx');
    var Potencia = require('./components/guides/vampire/disciplinas/Potencia.jsx');
    var Presenca = require('./components/guides/vampire/disciplinas/Presenca.jsx');
    var Quietus = require('./components/guides/vampire/disciplinas/Quietus.jsx');
    var Quimerismo = require('./components/guides/vampire/disciplinas/Quimerismo.jsx');
    var Rapidez = require('./components/guides/vampire/disciplinas/Rapidez.jsx');
    var Serpentis = require('./components/guides/vampire/disciplinas/Serpentis.jsx');
    var Taumaturgia = require('./components/guides/vampire/disciplinas/Taumaturgia.jsx');
    var Tenebrosidade = require('./components/guides/vampire/disciplinas/Tenebrosidade.jsx');
    var Vicissitude = require('./components/guides/vampire/disciplinas/Vicissitude.jsx');

var DiceRoller = require('./screens/DiceRollerScreen.jsx');
var BattleMap = require('./screens/BattleMapScreen.jsx');


var App = require('./components/App.jsx');

var Routes = {
  routes: (<Route name="app" path="/" handler={App}>

    <Route name="diceroller" path="diceroller" handler={DiceRollerScreen}/>
    <Route name="battlemap" path="battlemap" handler={BattleMapScreen} />
    <Route name="guides" path="guides" handler={GuideScreen} />
    <Route name="vampire" path="guides/vampire" handler={Vampire} />
    
    <Route name="clans" path="guides/vampire/clans" handler={Clans} />
    <Route name="assamita" path="guides/vampire/clans/assamita" handler={Assamita} />
    <Route name="brujah" path="guides/vampire/clans/brujah" handler={Brujah} />
    <Route name="gangrel" path="guides/vampire/clans/gangrel" handler={Gangrel} />
    <Route name="giovanni" path="guides/vampire/clans/giovanni" handler={Giovanni} />
    <Route name="malkavians" path="guides/vampire/clans/malkavians" handler={Malkavians} />
    <Route name="nosferatu" path="guides/vampire/clans/nosferatu" handler={Nosferatu} />
    <Route name="ravnos" path="guides/vampire/clans/ravnos" handler={Ravnos} />
    <Route name="seguidores" path="guides/vampire/clans/seguidores" handler={Seguidores} />
    <Route name="sombra" path="guides/vampire/clans/sombra" handler={Sombra} />
    <Route name="toreador" path="guides/vampire/clans/toreador" handler={Toreador} />
    <Route name="tremere" path="guides/vampire/clans/tremere" handler={Tremere} />
    <Route name="ventrue" path="guides/vampire/clans/ventrue" handler={Ventrue} />

    <Route name="disciplinas" path="guides/vampire/disciplinas" handler={Disciplinas} />
    <Route name="animalismo" path="guides/vampire/disciplinas/animalismo" handler={Animalismo} />
    <Route name="auspicios" path="guides/vampire/disciplinas/auspicios" handler={Auspicios} />
    <Route name="dominacao" path="guides/vampire/disciplinas/dominacao" handler={Dominacao} />
    <Route name="fortitude" path="guides/vampire/disciplinas/fortitude" handler={Fortitude} />
    <Route name="metamorfose" path="guides/vampire/disciplinas/metamorfose" handler={Metamorfose} />
    <Route name="ofuscacao" path="guides/vampire/disciplinas/ofuscacao" handler={Ofuscacao} />
    <Route name="potencia" path="guides/vampire/disciplinas/potencia" handler={Potencia} />   
    <Route name="presenca" path="guides/vampire/disciplinas/presenca" handler={Presenca} />   
    <Route name="quietus" path="guides/vampire/disciplinas/quietus" handler={Quietus} />   
    <Route name="quimerismo" path="guides/vampire/disciplinas/quimerismo" handler={Quimerismo} />   
    <Route name="rapidez" path="guides/vampire/disciplinas/rapidez" handler={Rapidez} />   
    <Route name="serpentis" path="guides/vampire/disciplinas/serpentis" handler={Serpentis} />   
    <Route name="taumaturgia" path="guides/vampire/disciplinas/taumaturgia" handler={Taumaturgia} />   
    <Route name="tenebrosidade" path="guides/vampire/disciplinas/tenebrosidade" handler={Tenebrosidade} />   
    <Route name="vicissitude" path="guides/vampire/disciplinas/vicissitude" handler={Vicissitude} />   
    
    <Route name="diceroller" path="/diceroller" handler={DiceRoller}/>
    <Route name="batlemap" path="/batlemap" handler={BattleMap} />

    <Route name="battlemap" path="/battlemap" handler={BattleMap} />
    <DefaultRoute handler={DiceRoller}/>
  </Route>),
  run: function(){
    Router.run(this.routes, function(Handler){
      React.render(<Handler />, document.getElementById('MainWindow'));
    });
  }
};

module.exports = Routes;
