/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Ravnos = React.createClass({

  render: function() {
    return (
      <div className="ravnos">
        <header>
          <h1>{Json.guias.vampiro.clans.ravnos.title}</h1>
          <div className="img-container">
          	<img src="assets/img/ravnos.png" />
          </div>
        </header>
        <ConcertinaList itens={Json.guias.vampiro.clans.ravnos.itens}/>
      </div>
    );
  }
});

module.exports = Ravnos;
