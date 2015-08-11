/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Potencia = React.createClass({

  render: function() {
    return (
      <div className="potencia">
        <header>
        	<h1>{Json.guias.vampiro.disciplinas.potencia.title}</h1>
          <div className="img-container">
            <img src="assets/img/potencia.png" />
          </div>
        </header>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.potencia.itens}/>
      </div>
    );
  }
});

module.exports = Potencia;
