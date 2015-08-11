/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Rapidez = React.createClass({

  render: function() {
    return (
      <div className="rapidez">
      	<header>
      		<h1>{Json.guias.vampiro.disciplinas.rapidez.title}</h1>
          <div className="img-container">
            <img src="assets/img/rapidez.png" />
          </div>
      	</header>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.rapidez.itens}/>
      </div>
    );
  }
});

module.exports = Rapidez;
