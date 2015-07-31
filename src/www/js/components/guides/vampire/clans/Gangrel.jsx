/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Gangrel = React.createClass({

  render: function() {
    return (
      <div className="gangrel">
        <h1>{Json.guias.vampiro.clans.gangrel.title}</h1>
        <div className="img-container">
        	<img src="assets/img/gangrel.png" />
        </div>
        <ConcertinaList itens={Json.guias.vampiro.clans.gangrel.itens}/>
      </div>
    );
  }
});

module.exports = Gangrel;
