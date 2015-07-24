/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var React = require('react');
var DynamicRow = require('./DynamicRow.jsx');

var ConcertinaListTables = React.createClass({
  _toggleItem: function(e){
      this.state.open && this.props.parentOpen ? this.setState({open: false}) : this.setState({open: true});
  },
  getInitialState: function() {
    return {open: false};
  },
  render: function(){
    var table = this.props.table;
    var rows = table.rows;
    var markup = [];

    var sistemClass = this.state.open ? 'seta-cima' : 'seta-baixo';
    var openClass = this.state.open ? '' : ' hidden';
    var parentOpenClass = this.props.parentOpen ? '' : ' hidden';

    for(var i = 0; i < rows.length; i++){
      markup.push(<DynamicRow itens={rows[i].cols}/>)
    }
    
    return (
      <div className="containerTable"> 
        <div onClick={this._toggleItem} className={'itemTable ' + sistemClass + parentOpenClass}>
          <span>{table.name}</span>
        </div>
      	<table onClick={this._toggleItem} className={openClass + parentOpenClass}>
          {markup}
        </table>
      </div> 
    );
  }
});

module.exports = ConcertinaListTables;
