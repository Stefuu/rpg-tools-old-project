/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Nosferatu = React.createClass({

  render: function() {
    return (
      <div className="nosferatu">
         <header>
          <h1>{Json.guias.vampiro.clans.nosferatu.title}</h1>
          <div className="img-container">
          	<img src="assets/img/nosferatu.png" />
          </div>
        </header>
        <ConcertinaList itens={Json.guias.vampiro.clans.nosferatu.itens}/>
      </div>
    );
  }
});

module.exports = Nosferatu;
