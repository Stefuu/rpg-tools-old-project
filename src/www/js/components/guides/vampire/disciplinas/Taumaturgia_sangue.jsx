/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Taumaturgia_sangue = React.createClass({

  render: function() {
    return (
      <div className="taumaturgia_sangue">
      	<header>
      		<h1>{Json.guias.vampiro.disciplinas.taumaturgia_sangue.title}</h1>
          <div className="img-container">
            <img src="assets/img/taumaturgia_sangue.png" />
          </div>
      	</header>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.taumaturgia_sangue.itens}/>
      </div>
    );
  }
});

module.exports = Taumaturgia_sangue;
