/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Json = require('./../../../../languages/pt-BR.json');

var Rapidez = React.createClass({

  render: function() {
    return (
      <div className="rapidez">
      	<h1>{Json.guias.vampiro.disciplinas.rapidez.title}</h1>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.rapidez.itens}/>
      </div>
    );
  }
});

module.exports = Rapidez;