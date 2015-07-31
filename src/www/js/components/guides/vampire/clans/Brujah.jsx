/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Brujah = React.createClass({

  render: function() {
    return (
      <div className="brujah">
        <h1>{Json.guias.vampiro.clans.brujah.title}</h1>
        <div className="img-container">
        	<img src="assets/img/brujah.jpg" />
        </div>
        <ConcertinaList itens={Json.guias.vampiro.clans.brujah.itens}/>
      </div>
    );
  }
});

module.exports = Brujah;
