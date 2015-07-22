/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Json = require('./../../../../languages/pt-BR.json');

var Potencia = React.createClass({

  render: function() {
    return (
      <div className="potencia">
        <h1>{Json.guias.vampiro.disciplinas.potencia.title}</h1>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.potencia.itens}/>
      </div>
    );
  }
});

module.exports = Potencia;
