/** @jsx React.DOM */

var React = require('react');

var Char = React.createClass({
	getInitialState: function() {
    	return {
        name: this.props.num + 1,
        posX: -1,
        posỲ: -1,
        active: true
    	};
  	},

  	_touchMove: function(e){
  		var el = e.target;
  		
  		e.preventDefault();

  		el.parentNode.style.top = e.touches[0].clientY - 15 + window.pageYOffset;
  		el.parentNode.style.left = e.touches[0].clientX - 15 + window.pageXOffset;
  		
  	},
    _touchEnd: function(e){
      var el = e.target;
      var aux = [];

      aux = JSON.parse(localStorage.getItem('chars'));
      
      for( var i = 0; i < aux.length; i++ ){
        
        if( el.getAttribute('data-key') == aux[i]['reactKey'] && el.value != '' ){
          console.log(el.getAttribute('data-key'));
          aux[i]['posY'] = el.parentNode.style.top;
          aux[i]['posX'] = el.parentNode.style.left;
        }
      }

      localStorage.setItem('chars',JSON.stringify(aux));

      this._checkDeletion(e.changedTouches[event.changedTouches.length-1].clientX + window.pageXOffset, e.changedTouches[event.changedTouches.length-1].clientY + window.pageYOffset,e.target);

    },
    _checkDeletion: function(itemX,itemY,item){
      var trashY = document.querySelector('.delete img').offsetTop;
      var trashX = document.querySelector('.delete img').offsetLeft;
      var trashWidth = document.querySelector('.delete img').width;
      var trashHeight = document.querySelector('.delete img').height
      
      if( (itemX >= trashX && itemX <= trashX + trashWidth) && (itemY >= trashY && itemY <= trashY + trashHeight) ){
        if (confirm('certeza vei?') == true) {
          item.parentNode.style.display = 'none';

          var aux = [];
          aux = JSON.parse(localStorage.getItem('chars'));
          
          for( var i = 0; i < aux.length; i++ ){
            
            if( item.getAttribute('data-key') == aux[i]['reactKey'] ){
              aux[i]['active'] = false;
            }
          }

          localStorage.setItem('chars',JSON.stringify(aux));
        }
      }

    },
    _showInput: function(e){
      var el = e.target.parentNode;
      if(el.querySelector('label')){  
        el.querySelector('label').style.display = 'block';
        el.querySelector('label').parentNode.style.zIndex = '1';
        el.querySelector('label').nextElementSibling.style.display = 'none';

        el.querySelector('label').querySelector('input').focus();
      }
    },

    _changeInitials: function(e){
      var el = e.target;
      
      el.parentNode.style.display = 'none';
      el.parentNode.parentNode.style.zIndex = '0';
      el.parentNode.nextElementSibling.style.display = 'block';
      
      var aux = [];
      aux = JSON.parse(localStorage.getItem('chars'));
      
      for( var i = 0; i < aux.length; i++ ){
        
        if( this.props.reactKey == aux[i]['reactKey'] && el.value != '' ){
          aux[i]['name'] = el.value.substring(0,2).toUpperCase() || '';
        }
      }

      localStorage.setItem('chars',JSON.stringify(aux));

      if( el.value != '' ){
        this.setState({
          name: el.value.substring(0,2).toUpperCase() || ''
        });
      }

    },
    componentDidMount: function(){
      
      if( this.props.name != -1 ){
        this.setState({
          name: this.props.name
        });
      }
      
      if( this.props.posY != -1 && this.props.posX != -1 ){
        this.setState({
          posX: this.props.posX,
          posY: this.props.posY
        });
      }

    },

  	render: function(){
  		//var headerTam = document.querySelector('.main-header').clientHeight;
    	if( this.state.posX != -1 && this.state.posY != -1 ){
        var topTranslate = parseInt(this.state.posY);
        var leftTranslate = parseInt(this.state.posX);
      }else{
      	var topTranslate = parseInt(this.props.num * 5) + 50;
        var leftTranslate = 20;

    		if( this.props.type == 'enemy' ){
  			 topTranslate += 200;  			
    		}
      }

      if( !this.props.active ){
        var display = 'none';
      }else{
        var display = 'initial';
      }

  		var charClass = 'char ' + this.props.type;
    	return (
        	<div className={charClass} style={ {top: topTranslate, left: leftTranslate, display: display} }>
            <label style={{display: 'none'}}>
              <input placeholder="Type initials:" onBlur={this._changeInitials} onKeyUp={ function(event){if(event.keyCode == 13){ this._changeInitials(event) } }.bind(this) } type="text"/>
            </label>
            <span>{this.state.name}</span>
            <div data-key={this.props.reactKey} className="dragContainer" onTouchMove={this._touchMove} onTouchEnd={this._touchEnd} onClick={this._showInput}></div>
          </div>    
    	);
  }
});

module.exports = Char;
