/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Taumaturgia_chama = React.createClass({

  render: function() {
    return (
      <div className="taumaturgia_chama">
      	<header>
      		<h1>{Json.guias.vampiro.disciplinas.taumaturgia_chama.title}</h1>
          <div className="img-container">
            <img src="assets/img/taumaturgia_chama.png" />
          </div>
      	</header>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.taumaturgia_chama.itens}/>
      </div>
    );
  }
});

module.exports = Taumaturgia_chama;
