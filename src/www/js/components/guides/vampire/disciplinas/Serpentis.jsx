/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Serpentis = React.createClass({

  render: function() {
    return (
      <div className="serpentis">
      	<h1>{Json.guias.vampiro.disciplinas.serpentis.title}</h1>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.serpentis.itens}/>
      </div>
    );
  }
});

module.exports = Serpentis;
