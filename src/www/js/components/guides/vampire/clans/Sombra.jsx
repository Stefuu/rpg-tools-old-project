/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Sombra = React.createClass({

  render: function() {
    return (
      <div className="sombra">
        <header>
          <h1>{Json.guias.vampiro.clans.sombra.title}</h1>
          <div className="img-container">
          	<img src="assets/img/sombra.gif" />
          </div>
        </header>
        <ConcertinaList itens={Json.guias.vampiro.clans.sombra.itens}/>
      </div>
    );
  }
});

module.exports = Sombra;
