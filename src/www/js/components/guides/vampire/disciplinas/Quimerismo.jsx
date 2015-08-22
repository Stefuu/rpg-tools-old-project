/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Quimerismo = React.createClass({

  render: function() {
    return (
      <div className="quimerismo">
      	<header>
      		<h1>{Json.guias.vampiro.disciplinas.quimerismo.title}</h1>
          <div className="img-container">
            <img src="assets/img/quimerismo.png" />
          </div>
      	</header>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.quimerismo.itens}/>
      </div>
    );
  }
});

module.exports = Quimerismo;
