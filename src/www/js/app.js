/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var React = require('react');
var Routes = require('./routes.js');
var FastClick = require('fastclick');

//Adiciona funcionalidades ao Date nativo.
require ('date-utils');

// Here we put our React instance to the global scope. Make sure you do not put it
// into production and make sure that you close and open your console if the
// DEV-TOOLS does not display
window.React = React;

document.addEventListener('deviceready', function(){
  FastClick(document.body);
  Routes.run();
}, false);

if(!window.cordova){
  console.info('Cordova not found. Calling deviceready event manually');
  var deviceready = new Event('deviceready');
  document.dispatchEvent(deviceready);
}
