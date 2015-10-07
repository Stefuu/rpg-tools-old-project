/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Necromancia_ash = React.createClass({

  render: function() {
    return (
      <div className="necromancia_ash">
        <header>
          <h1>{Json.guias.vampiro.disciplinas.necromancia_ash.title}</h1>
          <div className="img-container">
            <img src="assets/img/ashpath.jpg" />
          </div>
        </header>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.necromancia_ash.itens}/>
      </div>
    );
  }
});

module.exports = Necromancia_ash;
