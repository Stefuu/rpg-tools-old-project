/** @jsx React.DOM */

var React = require('react');
var DynamicRow = require('./DynamicRow.jsx');

var Char = require('./Char.jsx');

var BattleMap = React.createClass({
	getInitialState: function() {
    	return {qtdChars: 0};
  	},
	_createMatrix: function(size){
		var matrix = []; 
		var	i;
		var j;

		for( i = 0; i < size; i++ ){
			matrix.push([]);

			for( j = 0; j < size; j++ ){
				matrix[i].push( i.toString() + j);				
			}
		}

		return matrix;
	},

	_tiles: function(size){

		var size = size || 10;

		var matrix = this._createMatrix(size);

		var markup = [];
		for(var i = 0; i < size; i++){
      		markup.push(<DynamicRow itens={matrix[i]}/>)
    	}

    	return markup;
	},

	_createChars: function(){
		var i;
		
		var chars = [];
		
		for( i = 0; i < this.state.qtdChars; i++ ){
			chars.push(<Char />);
		}

		return chars;
	},

	_addChar: function(type){
		this.setState({qtdChars: this.state.qtdChars + 1});
	},

	_clear: function(type){
		this.setState({qtdChars: 0});
	},

	render: function() {
    
	var matrix = this._tiles(10);
	var chars = this._createChars();

    return (
      <div className="battle-map">
        <div className="char-container">
        	{chars}
        </div>
        <table>
        	{matrix}
        </table>
        <div className="controls">
        	<div className="friend" onClick={function(){ this._addChar('friend'); }.bind(this)}>
        		friend
        	</div>
        	<div className="enemy" onClick={function(){ this._addChar('enemy'); }.bind(this)}>
        		enemy
        	</div>
        	<div className="clear" onClick={this._clear}>
        		clear
        	</div>
        </div>
      </div>
    );
  }
});

module.exports = BattleMap;
