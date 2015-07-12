/** @jsx React.DOM */

var React = require('react');
var Header = require('./../components/Header.jsx');
var Content = require('./../components/Content.jsx');
var Footer = require('./../components/Footer.jsx');

//Adiciona funcionalidades ao Date nativo.
require ('date-utils');

// Here we put our React instance to the global scope. Make sure you do not put it
// into production and make sure that you close and open your console if the
// DEV-TOOLS does not display
window.React = React;

var MainWindow = React.createClass({
  _getOrientationByScreenSize: function(){
    var orientation = ( window.outerWidth > window.outerHeight ) ? 'landscape' : 'portrait';
    return orientation;
  },
  _setBodyFont: function() {
    if( this._getOrientationByScreenSize() == 'portrait' ){
      console.log('port');
      document.querySelector('body').style.fontSize = parseInt(window.innerHeight * 0.2) + 'px';
    }else{
      console.log('land');
      document.querySelector('body').style.fontSize = parseInt(window.innerWidth * 0.16) + 'px';
    }
  },
  componentDidMount: function(){
    console.log('mount app.js');
    // Seta a font-size do body inicial
    this._setBodyFont();

    // Observa se houve mudança de orientação
    window.addEventListener("orientationchange", function() {
      //document.querySelector(".match_info").style.display = "none";
      setTimeout(function(){
        this.setState({orientation: this._getOrientationByScreenSize()});
        //document.querySelector(".match_info").style.display = "inline-block";

        // Seta font-size do body quando muda o orientation
        this._setBodyFont();

      }.bind(this), 500);
    }.bind(this));
  },
  getInitialState: function(){
    return {
      orientation: this._getOrientationByScreenSize()
    };
  },
  render: function() {
    return (
      <div className="container">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
});

document.addEventListener('deviceready', function(){
  React.render(
    <MainWindow />,
    document.getElementById('MainWindow')
    );
}, false);

if(!window.cordova){
  console.info('Cordova not found. Calling deviceready event manually');
  var deviceready = new Event('deviceready');
  document.dispatchEvent(deviceready);
}

module.exports = MainWindow;
