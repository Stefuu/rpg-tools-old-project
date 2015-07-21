/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Json = require('./../../../../languages/pt-BR.json');

var Metamorfose = React.createClass({

  render: function() {
    return (
      <div className="metamorfose">
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.metamorfose}/>
      </div>
    );
  }
});

module.exports = Metamorfose;
