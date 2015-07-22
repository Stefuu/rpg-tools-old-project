/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Json = require('./../../../../languages/pt-BR.json');

var Ofuscacao = React.createClass({

  render: function() {
    return (
      <div className="ofuscacao">
      	<h1>{Json.guias.vampiro.disciplinas.ofuscacao.title}</h1>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.ofuscacao.itens}/>
      </div>
    );
  }
});

module.exports = Ofuscacao;
