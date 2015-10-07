/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Necromancia_bone = React.createClass({

  render: function() {
    return (
      <div className="necromancia_bone">
        <header>
          <h1>{Json.guias.vampiro.disciplinas.necromancia_bone.title}</h1>
          <div className="img-container">
            <img src="assets/img/bonepath.jpg" />
          </div>
        </header>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.necromancia_bone.itens}/>
      </div>
    );
  }
});

module.exports = Necromancia_bone;
