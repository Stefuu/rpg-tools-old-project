/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Toreador = React.createClass({

  render: function() {
    return (
      <div className="toreador">
        <header>
          <h1>{Json.guias.vampiro.clans.toreador.title}</h1>
          <div className="img-container">
          	<img src="assets/img/toreador.png" />
          </div>
        </header>
        <ConcertinaList itens={Json.guias.vampiro.clans.toreador.itens}/>
      </div>
    );
  }
});

module.exports = Toreador;
