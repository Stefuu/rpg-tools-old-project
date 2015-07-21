/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var ConcertinaList = React.createClass({

  render: function(){
  	var itens = this.props.itens;
  	var itensMarkup = [];
  	for(var i = 0; i < itens.length; i++){
  		itensMarkup.push( <li>
  							<span>Level {itens[i].title}</span>
  							<span>{itens[i].description}</span> 
  						  </li>);
  	}
    return (
    	<div>
	    	<ul className="concertina">
	    		{itensMarkup}
	    	</ul>
	    </div>
    );
  }
});

module.exports = ConcertinaList;
