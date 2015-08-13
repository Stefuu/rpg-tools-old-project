/** @jsx React.DOM */

var React = require('react');
var DynamicRow = require('./DynamicRow.jsx');

var Internationalization = require('./../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Char = require('./Char.jsx');

var BattleMap = React.createClass({
	getInitialState: function() {
    	return {
    		matrix: '8x12',
    		totChars: 0
    	};
  	},
	_createMatrix: function(sizeX,sizeY){
		var matrix = []; 
		var	i;
		var j;

		for( i = 0; i < sizeX; i++ ){
			matrix.push([]);
			for( j = 0; j < sizeY; j++ ){
				matrix[i].push( i.toString() + j);				
			}
		}

		return matrix;
	},

	_tiles: function(sizeX,sizeY){

		var matrix = this._createMatrix(sizeX,sizeY);

		var markup = [];
		for(var i = 0; i < sizeX; i++){
      		markup.push(<DynamicRow itens={matrix[i]}/>)
    	}

    	return markup;
	},

	_createChars: function(){
		var i;
		
		var chars = [];
		
		for( i = 0; i < this.state.totChars; i++ ){
			if( this._charOrder[i] == 'friend' ){	
				chars.push(<Char type={'friend'} key={i} num={i} />);
			}else{
				chars.push(<Char type={'enemy'} key={i} num={i} />);
			}
		}
		

		return chars;
	},
	
	_charOrder: [],

	_addChar: function(type){
		this._charOrder.push(type);

		this.setState({
			totChars: this.state.totChars + 1
		});
	},

	_clear: function(type){
		if (confirm(Json.battlemap.confirm) == true) {
			this.setState({
				totChars: 0
			});
			this._charOrder = [];    
		}
	},

	_changeMatrix: function(e) {
		var el = e.target;
		this.setState({
			matrix: el.value.toString()
		});
	},

	render: function() {
    
    var matrixRows = this.state.matrix.split('x')[0];
    var matrixCols = this.state.matrix.split('x')[1];

	var matrix = this._tiles(matrixRows,matrixCols);
	var chars = this._createChars();

    return (
      <div className="battle-map">
        <div className="char-container">
        	{chars}
        </div>
        <table>
        	<tbody>
        		{matrix}
        	</tbody>
        </table>
        <div className="controls">
        	<div className="friend" onClick={function(){ this._addChar('friend'); }.bind(this)}>
        		Add Friend
        	</div>
        	<div className="enemy" onClick={function(){ this._addChar('enemy'); }.bind(this)}>
        		Add Enemy
        	</div>
        	<div className="clear" onClick={this._clear}>
        		Delete All
        	</div>
        	<div className="map">
        		<select onChange={this._changeMatrix}>
        			<option value="">Choose map size</option>
        			<option value="12x8">Small - Portrait</option>
        			<option value="15x10">Medium - Portrait</option>
        			<option value="18x13">Large - Portrait</option>
        			<option value="8x12">Small - Landscape</option>
        			<option value="10x15">Medium - Landscape</option>
        			<option value="13x18">Large - Landscape</option>
        		</select>
        	</div>
        </div>
      </div>
    );
  }
});

module.exports = BattleMap;
