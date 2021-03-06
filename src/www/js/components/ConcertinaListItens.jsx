/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var React = require('react');
var ConcertinaListTables = require('./ConcertinaListTables.jsx');

var Internationalization = require('./../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var ConcertinaListItens = React.createClass({

  render: function(){
    var item = this.props.item;
    
    var titleClass = this.props.active ? 'seta-cima' : 'seta-baixo';
    var descClass = this.props.active ? 'slidableVisible' : 'slidableHidden';

    if(item.system){
      var systemMArkup = <span><b>{Json.commonWords.system}:<br /></b>{item.system}</span>;
    }
    if(item.additionalSystem){
     var additionalSystemMarkup = <span>{item.additionalSystem}</span>;
    }

    if(item.tables){
      var tables = item.tables.map(function(table,i){
        return(
            <ConcertinaListTables key={i} parentOpen={this.props.active} table={table}/>
          );
      }, this);
    }

    return (
    	<li>
        <div onClick={this.props.onClick} className={'title ' + titleClass}>
          <span>{item.title}</span>
        </div>
        <div className={'desc ' + descClass}>
          <span dangerouslySetInnerHTML={{__html: item.description}}></span>
          {systemMArkup}
          {tables}
          {additionalSystemMarkup}   
        </div> 
      </li>
    );
  }
});

module.exports = ConcertinaListItens;
