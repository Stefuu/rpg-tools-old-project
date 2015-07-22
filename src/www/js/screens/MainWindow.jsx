/** @jsx React.DOM */

var React = require('react');
// Here we put our React instance to the global scope. Make sure you do not put it
// into production and make sure that you close and open your console if the
// DEV-TOOLS does not display
window.React = React;

var MainWindow = React.createClass({
  render: function() {
    return (
      <div className="container">
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
