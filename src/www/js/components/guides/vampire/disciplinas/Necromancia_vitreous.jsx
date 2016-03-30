/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Necromancia_vitreous = React.createClass({

  render: function() {
    return (
      <div className="necromancia_vitreous">
      	<header>
      		<h1>{Json.guias.vampiro.disciplinas.necromancia_vitreous.title}</h1>
          <div className="img-container">
            <img src="assets/img/vitreouspath.jpg" />
          </div>
      	</header>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.necromancia_vitreous.itens}/>
      </div>
    );
  }
});

module.exports = Necromancia_vitreous;
