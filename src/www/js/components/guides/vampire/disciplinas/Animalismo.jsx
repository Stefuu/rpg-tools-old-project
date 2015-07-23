/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Animalismo = React.createClass({

  render: function() {
    return (
      <div className="animalismo">
      	<h1>{Json.guias.vampiro.disciplinas.animalismo.title}</h1>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.animalismo.itens}/>
      </div>
    );
  }
});

module.exports = Animalismo;
