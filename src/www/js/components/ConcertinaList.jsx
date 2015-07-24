/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var React = require('react');
var ConcertinaListItens = require('./ConcertinaListItens.jsx');

var ConcertinaList = React.createClass({
  render: function(){
  	var itens = this.props.itens;
  	var itensMarkup = [];
  	for(var i = 0; i < itens.length; i++){
  		itensMarkup.push( <ConcertinaListItens tables={itens} item={itens[i]}/>);
  	}
    return (
    	<div>
	    	<ul className="concertina">
	    		{itensMarkup}
	    	</ul>
	    </div>
    );
  }
});

module.exports = ConcertinaList;
