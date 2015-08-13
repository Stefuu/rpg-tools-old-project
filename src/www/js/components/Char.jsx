/** @jsx React.DOM */

var React = require('react');

var Char = React.createClass({
	getInitialState: function() {
    	return {
    		x: 0,
    		y: 0
    	};
  	},

  	_touchMove: function(e){
  		var el = e.target;
  		
  		e.preventDefault();

  		el.offsetTop = e.touches[0].clientY - 15;
  		el.offsetLeft = e.touches[0].clientX - 15;

  		el.style.top = e.touches[0].clientY - 15;
  		el.style.left = e.touches[0].clientX - 15;
  		
  	},

  	render: function(){
  		var headerTam = document.querySelector('.main-header').clientHeight;
  		var topTranslate = parseInt(this.props.num * 5) + headerTam;

  		if( this.props.type == 'enemy' ){
			topTranslate += 200;  			
  		}

  		var charClass = 'char ' + this.props.type;
    	return (
        	<div onTouchMove={this._touchMove} className={charClass} style={ {top: topTranslate} }></div>    
    	);
  }
});

module.exports = Char;
