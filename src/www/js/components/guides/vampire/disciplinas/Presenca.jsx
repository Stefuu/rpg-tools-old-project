/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Presenca = React.createClass({

  render: function() {
    return (
      <div className="presenca">
      	<header>
      		<h1>{Json.guias.vampiro.disciplinas.presenca.title}</h1>
          <div className="img-container">
            <img src="assets/img/presenca.png" />
          </div>
      	</header>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.presenca.itens}/>
      </div>
    );
  }
});

module.exports = Presenca;
