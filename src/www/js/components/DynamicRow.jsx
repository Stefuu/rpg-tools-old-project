/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var React = require('react');

var DynamicRow = React.createClass({
   render: function(){
    var itens = this.props.itens;
    var rows = [];

    for(var i = 0; i < itens.length; i++){
      rows.push(<td><span>{itens[i]}</span></td>)
    }    
    return (
    	<tr>
        {rows}
      </tr>
    );
  }
});

module.exports = DynamicRow;
