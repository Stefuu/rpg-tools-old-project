/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Json = require('./../../../../languages/pt-BR.json');

var Rapidez = React.createClass({

  render: function() {
    return (
      <div className="rapidez">
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.rapidez}/>
      </div>
    );
  }
});

module.exports = Rapidez;
