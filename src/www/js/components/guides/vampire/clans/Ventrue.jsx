/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Ventrue = React.createClass({

  render: function() {
    return (
      <div className="ventrue">
        <header>
          <h1>{Json.guias.vampiro.clans.ventrue.title}</h1>
          <div className="img-container">
          	<img src="assets/img/ventrue.png" />
          </div>
        </header>
        <ConcertinaList itens={Json.guias.vampiro.clans.ventrue.itens}/>
      </div>
    );
  }
});

module.exports = Ventrue;
