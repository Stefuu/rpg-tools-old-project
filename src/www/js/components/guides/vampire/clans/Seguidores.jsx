/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Seguidores = React.createClass({

  render: function() {
    return (
      <div className="seguidores">
        <header>
          <h1>{Json.guias.vampiro.clans.seguidores.title}</h1>
          <div className="img-container">
          	<img src="assets/img/seguidores.gif" />
          </div>
        </header>
        <ConcertinaList itens={Json.guias.vampiro.clans.seguidores.itens}/>
      </div>
    );
  }
});

module.exports = Seguidores;
