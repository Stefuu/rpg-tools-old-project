/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var React = require('react');

var ConcertinaListItens = React.createClass({
  _toggleItem: function(e){
      this.state.open ? this.setState({open: false}) : this.setState({open: true});
  },
  getInitialState: function() {
    return {open: false};
  },
  render: function(){
    var item = this.props.item;
    var titleClass = this.state.open ? 'seta-cima' : 'seta-baixo';
    var descClass = this.state.open ? '' : 'hidden';
    return (
    	<li>
        <span onClick={this._toggleItem} className={'title ' + titleClass}>{item.title}</span>
        <span className={'desc ' + descClass}>{item.description}</span> 
      </li>
    );
  }
});

module.exports = ConcertinaListItens;
