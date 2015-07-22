/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Json = require('./../../../../languages/pt-BR.json');

var Auspicios = React.createClass({

  render: function() {
    return (
      <div className="auspicios">
      	<h1>{Json.guias.vampiro.disciplinas.auspicios.title}</h1>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.auspicios.itens}/>
      </div>
    );
  }
});

module.exports = Auspicios;
