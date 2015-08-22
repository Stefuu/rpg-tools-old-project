/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Auspicios = React.createClass({

  render: function() {
    return (
      <div className="auspicios">
      	<header>
      		<h1>{Json.guias.vampiro.disciplinas.auspicios.title}</h1>
          <div className="img-container">
            <img src="assets/img/auspicios.png" />
          </div>
      	</header>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.auspicios.itens}/>
      </div>
    );
  }
});

module.exports = Auspicios;
