/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Json = require('./../../../../languages/pt-BR.json');

var Fortitude = React.createClass({

  render: function() {
    return (
      <div className="fortitude">
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.fortitude}/>
      </div>
    );
  }
});

module.exports = Fortitude;
