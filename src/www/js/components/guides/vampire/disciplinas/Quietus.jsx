/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Quietus = React.createClass({

  render: function() {
    return (
      <div className="quietus">
      	<header>
      		<h1>{Json.guias.vampiro.disciplinas.quietus.title}</h1>
          <div className="img-container">
            <img src="assets/img/quietus.png" />
          </div>
      	</header>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.quietus.itens}/>
      </div>
    );
  }
});

module.exports = Quietus;
