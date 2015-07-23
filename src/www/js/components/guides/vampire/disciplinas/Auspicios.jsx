/** @jsx React.DOM */

var React = require('react');
var ConcertinaList = require('./../../../../components/ConcertinaList.jsx');
var Internationalization = require('./../../../../modules/Internationalization.js');

var Json = require('./../../../../languages/en-US.json');

var Auspicios = React.createClass({

  render: function() {
    return (
      <div className="auspicios">
      	<h1>{Json.guias.vampiro.disciplinas.auspicios.title}</h1>
        <ConcertinaList itens={Json.guias.vampiro.disciplinas.auspicios.itens}/>
      </div>
    );
  }
});

module.exports = Auspicios;
