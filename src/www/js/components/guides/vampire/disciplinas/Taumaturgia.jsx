/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Taumaturgia = React.createClass({

  render: function() {
    return (
      <div className="taumaturgia">
      	<h1>{Json.guias.vampiro.disciplinas.taumaturgia.title}</h1>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.taumaturgia.itens}/>
      </div>
    );
  }
});

module.exports = Taumaturgia;
