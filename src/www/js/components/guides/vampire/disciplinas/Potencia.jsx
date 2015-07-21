/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Json = require('./../../../../languages/pt-BR.json');

var Potencia = React.createClass({

  render: function() {
    return (
      <div className="potencia">
        <span>
         <ConcertinaList itens={Json.guias.vampiro.disciplinas.potencia}/>
        </span>
      </div>
    );
  }
});

module.exports = Potencia;
