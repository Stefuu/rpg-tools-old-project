/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Taumaturgia_mente = React.createClass({

  render: function() {
    return (
      <div className="taumaturgia_mente">
      	<header>
      		<h1>{Json.guias.vampiro.disciplinas.taumaturgia_mente.title}</h1>
          <div className="img-container">
            <img src="assets/img/taumaturgia_mente.png" />
          </div>
      	</header>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.taumaturgia_mente.itens}/>
      </div>
    );
  }
});

module.exports = Taumaturgia_mente;
