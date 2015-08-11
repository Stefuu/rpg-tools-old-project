/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Vicissitude = React.createClass({

  render: function() {
    return (
      <div className="vicissitude">
      	<header>	
      		<h1>{Json.guias.vampiro.disciplinas.vicissitude.title}</h1>
          <div className="img-container">
            <img src="assets/img/vicissitude.jpg" />
          </div>
      	</header>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.vicissitude.itens}/>
      </div>
    );
  }
});

module.exports = Vicissitude;
