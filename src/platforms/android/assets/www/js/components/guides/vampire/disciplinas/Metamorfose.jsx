/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Json = require('./../../../../languages/pt-BR.json');

var Metamorfose = React.createClass({

  render: function() {
    return (
      <div className="metamorfose">
      	<h1>{Json.guias.vampiro.disciplinas.metamorfose.title}</h1>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.metamorfose.itens}/>
      </div>
    );
  }
});

module.exports = Metamorfose;
