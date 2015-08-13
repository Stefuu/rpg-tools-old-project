/** @jsx React.DOM */

var React = require('react');

var Char = React.createClass({
	getInitialState: function() {
    	return {
        letter: ''
    	};
  	},

  	_touchMove: function(e){
  		var el = e.target;
  		
  		e.preventDefault();

  		el.parentNode.style.top = e.touches[0].clientY - 15;
  		el.parentNode.style.left = e.touches[0].clientX - 15;
  		
  	},
    _showInput: function(e){
      var el = e.target.parentNode;
      if(el.querySelector('label')){  
        el.querySelector('label').style.display = 'block';
      }
    },

    _changeInitials: function(e){
      var el = e.target;
      
      el.parentNode.style.display = 'none';

      this.setState({
        letter: el.value
      });
    },

  	render: function(){
  		var headerTam = document.querySelector('.main-header').clientHeight;
  		var topTranslate = parseInt(this.props.num * 5) + headerTam;

  		if( this.props.type == 'enemy' ){
			topTranslate += 200;  			
  		}

  		var charClass = 'char ' + this.props.type;
    	return (
        	<div className={charClass} style={ {top: topTranslate} }>
            <label style={{display: 'none'}}>
              Type initials:<input onBlur={this._changeInitials} type="text"/>
            </label>
            <span>{this.state.letter}</span>
            <div className="dragContainer" onTouchMove={this._touchMove} onClick={this._showInput}></div>
          </div>    
    	);
  }
});

module.exports = Char;
