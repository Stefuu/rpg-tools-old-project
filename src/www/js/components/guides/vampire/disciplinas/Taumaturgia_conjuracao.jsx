/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Taumaturgia_conjuracao = React.createClass({

  render: function() {
    return (
      <div className="taumaturgia_conjuracao">
      	<header>
      		<h1>{Json.guias.vampiro.disciplinas.taumaturgia_conjuracao.title}</h1>
          <div className="img-container">
            <img src="assets/img/taumaturgia_conjuracao.png" />
          </div>
      	</header>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.taumaturgia_conjuracao.itens}/>
      </div>
    );
  }
});

module.exports = Taumaturgia_conjuracao;
