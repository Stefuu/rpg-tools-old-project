/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var React = require('react');
var ConcertinaListItens = require('./ConcertinaListItens.jsx');

var ConcertinaList = React.createClass({
  getInitialState: function () {
    return { activeItem: null }
  },
  _setActive: function (value) {
    if( value == this.state.activeItem ){
      this.setState({ activeItem : null });
    }else{
      this.setState({ activeItem : value });
    }
    
    // Scroll to item
    var headerHeight = document.querySelector('.content header').clientHeight;
    var liBtnHeight = document.querySelector('.concertina li .title').clientHeight;
    var fixHeaderHeight = document.querySelector('.main-header .top').clientHeight;
    setTimeout(function(){
      document.body.scrollTop = parseInt(headerHeight - fixHeaderHeight + (liBtnHeight * (value + 1)) - 1);
    }, 500); 
     
  },
  render: function(){
  	var itens = this.props.itens;

    return (
    	<div>
	    	<ul className="concertina">
	    		{itens.map(function(item,i){
            var boundClick = this._setActive.bind(this,i);
            return (
              <ConcertinaListItens key={i} onClick={boundClick} item={item} ref={'item' + i} active={this.state.activeItem == i} />
            );
          }, this)}
	    	</ul>
	    </div>
    );
  }
});

module.exports = ConcertinaList;
