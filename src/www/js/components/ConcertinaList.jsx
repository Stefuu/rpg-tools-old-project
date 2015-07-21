/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */
/*
var json = {
	"vampire" : {
		"disciplinas" : {
			"animalismo" : [
				{
					"title" : "Level 1", 
					"description" : "blabla"
				},
				{
					"title" : "Level 2", 
					"description" : "blabla"
				}
			],
			"fortitude" : [
				{
					"title" : "Level 1", 
					"description" : "blabla"
				},
				{
					"title" : "Level 2", 
					"description" : "blabla"
				}
			],
		}
	}
}

porps.itens = json.vampire.disciplinas.animalismo
*/
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
