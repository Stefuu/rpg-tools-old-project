/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Internationalization = require('./../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var GuideScreen = React.createClass({
  render: function() {
    return (
      <div className="guides">
        <header>
          <h1>{Json.guias.title}</h1>
          <div className="img-container">
            <img src="assets/img/guias.jpg" />
          </div>
        </header>
        <ul>
          <Link to="vampire">
            <li className="itemBtn seta-direita">{Json.guias.vampiro.title}</li>
          </Link>
          <li className="itemBtn seta-direita">D&amp;D</li>
        </ul>
      </div>
    );
  }
});

module.exports = GuideScreen;
