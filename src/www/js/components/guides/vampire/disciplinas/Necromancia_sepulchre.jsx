/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Necromancia_sepulchre = React.createClass({

  render: function() {
    return (
      <div className="necromancia_sepulchre">
        <header>
          <h1>{Json.guias.vampiro.disciplinas.necromancia_sepulchre.title}</h1>
          <div className="img-container">
            <img src="assets/img/sepulchrepath.jpg" />
          </div>
        </header>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.necromancia_sepulchre.itens}/>
      </div>
    );
  }
});

module.exports = Necromancia_sepulchre;
