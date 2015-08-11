/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Giovanni = React.createClass({

  render: function() {
    return (
      <div className="giovanni">
        <header>
          <h1>{Json.guias.vampiro.clans.giovanni.title}</h1>
          <div className="img-container">
          	<img src="assets/img/giovanni.png" />
          </div>
        </header>
        <ConcertinaList itens={Json.guias.vampiro.clans.giovanni.itens}/>
      </div>
    );
  }
});

module.exports = Giovanni;
