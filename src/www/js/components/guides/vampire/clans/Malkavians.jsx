/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Malkavians = React.createClass({

  render: function() {
    return (
      <div className="malkavians">
        <h1>{Json.guias.vampiro.clans.malkaviano.title}</h1>
        <div className="img-container">
        	<img src="assets/img/malkaviano.png" />
        </div>
        <ConcertinaList itens={Json.guias.vampiro.clans.malkaviano.itens}/>
      </div>
    );
  }
});

module.exports = Malkavians;
