/** @jsx React.DOM */

var React = require('react');
var DynamicRow = require('./DynamicRow.jsx');

var Internationalization = require('./../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Char = require('./Char.jsx');

var BattleMap = React.createClass({
	getInitialState: function() {
    	return {
    		matrix: '10x8',
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
		var i,j,keyCount;
		
		var chars = [];
		
		var size = this.state.totChars;

		this._charOrder = JSON.parse(localStorage.getItem('chars'));
		size = this._charOrder.length;
		
		for( i = 0, j = 0, keyCount = 0; keyCount < size; keyCount++ ){
			
			if( this._charOrder[keyCount]['charType'] == 'friend' ){	
				chars.push(<Char type={'friend'} key={keyCount} posY={this._charOrder[keyCount]['posY']} posX={this._charOrder[keyCount]['posX']} reactKey={keyCount} name={this._charOrder[keyCount]['name']} num={i} />);
				i++;
			}else{
				chars.push(<Char type={'enemy'} key={keyCount} posY={this._charOrder[keyCount]['posY']} posX={this._charOrder[keyCount]['posX']} reactKey={keyCount} name={this._charOrder[keyCount]['name']} num={j} />);
				j++;
			}
		}
	
		localStorage.setItem('chars',JSON.stringify(this._charOrder));

		return chars;
	},
	
	_charOrder: [],

	_addChar: function(type,posX,posY){
		
		this._charOrder.push({
			charType: type,
			name: -1,
			reactKey: this.state.totChars,
			posX: -1,
			posY: -1
		});
		
		this.setState({
			totChars: this.state.totChars + 1
		});
		
		if(navigator.vibrate){  
        	navigator.vibrate([50]);
      	}

      	localStorage.setItem('chars',JSON.stringify(this._charOrder));
      	
	},
	_setCharsPosition: function(){

	},
	_clear: function(type){
		if (confirm(Json.battlemap.confirm) == true) {
			this.setState({
				totChars: 0
			});
			localStorage.setItem('chars',JSON.stringify([]));
		}
	},

	_changeMatrix: function(e) {
		var el = e.target;
		this.setState({
			matrix: el.value.toString()
		});
	},

	componentDidMount: function(){
		
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
        		+ Friend
        	</div>
        	<div className="enemy" onClick={function(){ this._addChar('enemy'); }.bind(this)}>
        		+ Enemy
        	</div>
        	<div className="clear" onClick={this._clear}>
        		Delete All
        	</div>
        	<div className="map">
        		<select onChange={this._changeMatrix}>
        			<option value="">Choose map size</option>
        			<option value="10x8">Small - Portrait</option>
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
