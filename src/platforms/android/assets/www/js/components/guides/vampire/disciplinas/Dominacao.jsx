/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Json = require('./../../../../languages/pt-BR.json');

var Dominacao = React.createClass({

  render: function() {
    return (
      <div className="dominacao">
      	<h1>{Json.guias.vampiro.disciplinas.dominacao.title}</h1>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.dominacao.itens}/>
      </div>
    );
  }
});

module.exports = Dominacao;
