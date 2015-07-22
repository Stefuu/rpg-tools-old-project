/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Json = require('./../../../../languages/pt-BR.json');

var Fortitude = React.createClass({

  render: function() {
    return (
      <div className="fortitude">
      	<h1>{Json.guias.vampiro.disciplinas.fortitude.title}</h1>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.fortitude.itens}/>
      </div>
    );
  }
});

module.exports = Fortitude;
