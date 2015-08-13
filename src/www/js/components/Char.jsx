/** @jsx React.DOM */

var React = require('react');

var Char = React.createClass({
	getInitialState: function() {
    	return {
    		x: 0,
    		y: 0
    	};
  	},
    return (
        <div className="char"></div>    
    );
  }
});

module.exports = Char;
