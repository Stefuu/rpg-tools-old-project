/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Metamorfose = React.createClass({

  render: function() {
    return (
      <div className="metamorfose">
      	<h1>{Json.guias.vampiro.disciplinas.metamorfose.title}</h1>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.metamorfose.itens}/>
      </div>
    );
  }
});

module.exports = Metamorfose;
