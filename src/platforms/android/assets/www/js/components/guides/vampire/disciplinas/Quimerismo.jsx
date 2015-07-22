/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Json = require('./../../../../languages/pt-BR.json');

var Quimerismo = React.createClass({

  render: function() {
    return (
      <div className="quimerismo">
      	<h1>{Json.guias.vampiro.disciplinas.quimerismo.title}</h1>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.quimerismo.itens}/>
      </div>
    );
  }
});

module.exports = Quimerismo;
