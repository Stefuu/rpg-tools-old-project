/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Json = require('./../../../../languages/pt-BR.json');

var Taumaturgia = React.createClass({

  render: function() {
    return (
      <div className="taumaturgia">
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.taumaturgia}/>
      </div>
    );
  }
});

module.exports = Taumaturgia;
