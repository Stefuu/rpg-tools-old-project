/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Fortitude = React.createClass({

  render: function() {
    return (
      <div className="fortitude">
      	<h1>{Json.guias.vampiro.disciplinas.fortitude.title}</h1>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.fortitude.itens}/>
      </div>
    );
  }
});

module.exports = Fortitude;
