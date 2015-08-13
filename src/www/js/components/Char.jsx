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
    	return (
        	<div onTouchMove={this._touchMove} className="char"></div>    
    	);
  }
});

module.exports = Char;
