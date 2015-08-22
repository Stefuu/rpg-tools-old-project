/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Internationalization = require('./../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Vampire = React.createClass({

  render: function() {
    return (
      <div className="vampire">
        <header>
          <h1>{Json.guias.vampiro.title}</h1>
          <div className="img-container">
            <img src="assets/img/vampiro.jpg" />
          </div>
        </header>
        <ul>
        	<Link to="clans">
        	 <li className="itemBtn seta-direita">{Json.guias.vampiro.clans.title}</li>
        	</Link>
          <Link to="disciplinas">
        	 <li className="itemBtn seta-direita">{Json.guias.vampiro.disciplinas.title}</li>
          </Link>
        </ul>
      </div>
    );
  }
});

module.exports = Vampire;
