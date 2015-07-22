/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var ConcertinaListItens = React.createClass({
  _toggleItem: function(e){
    var item = e.target.nextSibling;
    if(getComputedStyle(item)['display'] == 'none'){
      item.style.display = 'block';
      this.setState({open: true});
    }else{
      item.style.display = 'none';
      this.setState({open: false});
    }
  },
  getInitialState: function() {
    return {open: false};
  },
  render: function(){
    var item = this.props.item;
    var titleClass = this.state.open ? 'title seta-cima' : 'title seta-baixo';
    return (
    	<li>
        <span onClick={this._toggleItem} className={titleClass}>{item.title}</span>
        <span className='desc'>{item.description}</span> 
      </li>
    );
  }
});

module.exports = ConcertinaListItens;
