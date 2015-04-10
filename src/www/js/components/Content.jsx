/** @jsx React.DOM */

var React = require('react');
var Home = require('./Home.jsx');
var BattleMap = require('./BattleMap.jsx');

var Content = React.createClass({
  _selectQuickMenu : function(e){

    // Remove classes de ativo
    var itens = document.querySelectorAll('.quick-menu li');
    for(var i = 0; i < itens.length; i++){
      var substringLimit = parseInt(document.querySelectorAll('.quick-menu li')[i].className.indexOf('active'));

      if( substringLimit != -1){
        itens[i].className = itens[i].className.substring( 0, substringLimit );
      }
    }

    // Adiciona classe de ativo ao elemento clicado
    var selectedItem = e.target.parentNode;
    var contentToShow = selectedItem.className.trim();
    selectedItem.className = selectedItem.className + ' active';

    // Altera estado do conteudo
    console.log(contentToShow == 'Home');
    switch(contentToShow){
      case 'Home' :
        var content = <Home />;
        break;
      case 'BattleMap' :
        var content = <BattleMap />;
        break;
    }
    console.log(content);
    this.setState({content: content});

  },
  getInitialState: function(){
    return {
      content: <Home />
    };
  },
  componentDidMount: function(){
    var itens = document.querySelectorAll('.quick-menu li');
    for(var i = 0; i < itens.length; i++){
      itens[i].addEventListener('click', this._selectQuickMenu);
    }
  },
  render: function() {

    return (
      <div className="main-content">
        {this.state.content}
      </div>
    );
  }
});

module.exports = Content;
