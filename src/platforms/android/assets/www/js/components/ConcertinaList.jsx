/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var ConcertinaList = React.createClass({
  _toggleItem: function(e){
  	var item = e.target.nextSibling;
  	getComputedStyle(item)['display'] == 'none' ? item.style.display = 'block' : item.style.display = 'none';
  },
  componentDidMount: function(){
  	
  },
  render: function(){
  	var itens = this.props.itens;
  	var itensMarkup = [];
  	for(var i = 0; i < itens.length; i++){
  		itensMarkup.push( <li>
  							<span onClick={this._toggleItem} className='title'>{itens[i].title}</span>
  							<span className='desc'>{itens[i].description}</span> 
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
