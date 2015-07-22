/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Json = require('./../../../../languages/pt-BR.json');

var Serpentis = React.createClass({

  render: function() {
    return (
      <div className="serpentis">
      	<h1>{Json.guias.vampiro.disciplinas.serpentis.title}</h1>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.serpentis.itens}/>
      </div>
    );
  }
});

module.exports = Serpentis;
