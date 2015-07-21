/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Json = require('./../../../../languages/pt-BR.json');

var Dominacao = React.createClass({

  render: function() {
    return (
      <div className="dominacao">
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.dominacao}/>
      </div>
    );
  }
});

module.exports = Dominacao;
