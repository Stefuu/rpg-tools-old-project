/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Ofuscacao = React.createClass({

  render: function() {
    return (
      <div className="ofuscacao">
      	<header>
      		<h1>{Json.guias.vampiro.disciplinas.ofuscacao.title}</h1>
          <div className="img-container">
            <img src="assets/img/ofuscacao.jpg" />
          </div>
      	</header>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.ofuscacao.itens}/>
      </div>
    );
  }
});

module.exports = Ofuscacao;
