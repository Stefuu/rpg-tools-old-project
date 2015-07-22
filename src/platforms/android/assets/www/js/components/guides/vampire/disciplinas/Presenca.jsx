/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Json = require('./../../../../languages/pt-BR.json');

var Presenca = React.createClass({

  render: function() {
    return (
      <div className="presenca">
      	<h1>{Json.guias.vampiro.disciplinas.presenca.title}</h1>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.presenca.itens}/>
      </div>
    );
  }
});

module.exports = Presenca;
