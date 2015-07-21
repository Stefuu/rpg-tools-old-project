/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Json = require('./../../../../languages/pt-BR.json');

var Ofuscacao = React.createClass({

  render: function() {
    return (
      <div className="ofuscacao">
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.ofuscacao}/>
      </div>
    );
  }
});

module.exports = Ofuscacao;
