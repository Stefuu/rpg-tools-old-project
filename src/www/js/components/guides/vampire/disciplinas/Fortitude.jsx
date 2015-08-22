/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Fortitude = React.createClass({

  render: function() {
    return (
      <div className="fortitude">
      	<header>
      		<h1>{Json.guias.vampiro.disciplinas.fortitude.title}</h1>
          <div className="img-container">
            <img src="assets/img/fortitude.png" />
          </div>
      	</header>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.fortitude.itens}/>
      </div>
    );
  }
});

module.exports = Fortitude;
