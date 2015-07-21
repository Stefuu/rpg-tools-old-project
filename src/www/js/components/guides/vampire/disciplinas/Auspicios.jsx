/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Json = require('./../../../../languages/pt-BR.json');

var Auspicios = React.createClass({

  render: function() {
    return (
      <div className="auspicios">
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.auspicios}/>
      </div>
    );
  }
});

module.exports = Auspicios;
