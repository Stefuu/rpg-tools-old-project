/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Metamorfose = React.createClass({

  render: function() {
    return (
      <div className="metamorfose">
      	<header>
      		<h1>{Json.guias.vampiro.disciplinas.metamorfose.title}</h1>
          <div className="img-container">
            <img src="assets/img/metamorfose.png" />
          </div>
      	</header>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.metamorfose.itens}/>
      </div>
    );
  }
});

module.exports = Metamorfose;
