/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Json = require('./../../../../languages/pt-BR.json');

var Animalismo = React.createClass({

  render: function() {
    return (
      <div className="animalismo">
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.animalismo}/>
      </div>
    );
  }
});

module.exports = Animalismo;
