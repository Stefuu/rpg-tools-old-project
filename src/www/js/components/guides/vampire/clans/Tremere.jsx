/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Tremere = React.createClass({

  render: function() {
    return (
      <div className="tremere">
        <header>
          <h1>{Json.guias.vampiro.clans.tremere.title}</h1>
          <div className="img-container">
          	<img src="assets/img/tremere.png" />
          </div>
        </header>
        <ConcertinaList itens={Json.guias.vampiro.clans.tremere.itens}/>
      </div>
    );
  }
});

module.exports = Tremere;
