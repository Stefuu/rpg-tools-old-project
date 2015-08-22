/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Assamita = React.createClass({

  render: function() {
    return (
      <div className="assamita">
        <header>
          <h1>{Json.guias.vampiro.clans.assamita.title}</h1>
          <div className="img-container">
          	<img src="assets/img/assamita.png" />
          </div>
        </header>
        <ConcertinaList itens={Json.guias.vampiro.clans.assamita.itens}/>
      </div>
    );
  }
});

module.exports = Assamita;
