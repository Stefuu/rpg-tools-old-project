/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Tenebrosidade = React.createClass({

  render: function() {
    return (
      <div className="tenebrosidade">
      	<h1>{Json.guias.vampiro.disciplinas.tenebrosidade.title}</h1>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.tenebrosidade.itens}/>
      </div>
    );
  }
});

module.exports = Tenebrosidade;
