/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Taumaturgia_destruicao = React.createClass({

  render: function() {
    return (
      <div className="taumaturgia_destruicao">
      	<header>
      		<h1>{Json.guias.vampiro.disciplinas.taumaturgia_destruicao.title}</h1>
          <div className="img-container">
            <img src="assets/img/taumaturgia_destruicao.png" />
          </div>
      	</header>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.taumaturgia_destruicao.itens}/>
      </div>
    );
  }
});

module.exports = Taumaturgia_destruicao;
