/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Internationalization = require('./../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Clans = React.createClass({

  render: function() {
    return (
      <div className="clans">
        <header>
          <h1>{Json.guias.vampiro.clans.title}</h1>
          <div className="img-container">
            <img src="assets/img/clans.jpg" />
          </div>
        </header>
        <ul>
          <Link to="assamita">
            <li className="itemBtn seta-direita">{Json.guias.vampiro.clans.assamita.title}</li>
          </Link>
          <Link to="brujah">
            <li className="itemBtn seta-direita">{Json.guias.vampiro.clans.brujah.title}</li>
          </Link>
          <Link to="gangrel">
            <li className="itemBtn seta-direita">{Json.guias.vampiro.clans.gangrel.title}</li>
          </Link>
          <Link to="giovanni">
            <li className="itemBtn seta-direita">{Json.guias.vampiro.clans.giovanni.title}</li>
          </Link>
          <Link to="sombra">
            <li className="itemBtn seta-direita">{Json.guias.vampiro.clans.sombra.title}</li>
          </Link>
          <Link to="malkavians">
            <li className="itemBtn seta-direita">{Json.guias.vampiro.clans.malkaviano.title}</li>
          </Link>
          <Link to="nosferatu">
            <li className="itemBtn seta-direita">{Json.guias.vampiro.clans.nosferatu.title}</li>
          </Link>
          <Link to="ravnos">
            <li className="itemBtn seta-direita">{Json.guias.vampiro.clans.ravnos.title}</li>
          </Link>
          <Link to="seguidores">
            <li className="itemBtn seta-direita">{Json.guias.vampiro.clans.seguidores.title}</li>
          </Link>
          <Link to="toreador">
            <li className="itemBtn seta-direita">{Json.guias.vampiro.clans.toreador.title}</li>
          </Link>
          <Link to="tremere">
            <li className="itemBtn seta-direita">{Json.guias.vampiro.clans.ravnos.title}</li>
          </Link>
          <Link to="ventrue">
            <li className="itemBtn seta-direita">{Json.guias.vampiro.clans.ravnos.title}</li>
          </Link>
        </ul>
      </div>
    );
  }
});

module.exports = Clans;
