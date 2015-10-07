/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Necromancia_mortuus = React.createClass({

  render: function() {
    return (
      <div className="necromancia_mortuus">
        <header>
          <h1>{Json.guias.vampiro.disciplinas.necromancia_mortuus.title}</h1>
          <div className="img-container">
            <img src="assets/img/mortuuspath.jpg" />
          </div>
        </header>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.necromancia_mortuus.itens}/>
      </div>
    );
  }
});

module.exports = Necromancia_mortuus;
