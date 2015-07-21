/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Json = require('./../../../../languages/pt-BR.json');

var Serpentis = React.createClass({

  render: function() {
    return (
      <div className="serpentis">
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.serpentis}/>
      </div>
    );
  }
});

module.exports = Serpentis;
