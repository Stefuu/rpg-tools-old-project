/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Tenebrosidade = React.createClass({

  render: function() {
    return (
      <div className="tenebrosidade">
      	<header>
      		<h1>{Json.guias.vampiro.disciplinas.tenebrosidade.title}</h1>
          <div className="img-container">
            <img src="assets/img/tenebrosidade.png" />
          </div>
      	</header>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.tenebrosidade.itens}/>
      </div>
    );
  }
});

module.exports = Tenebrosidade;
