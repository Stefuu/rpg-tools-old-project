/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Clans = React.createClass({

  render: function() {
    return (
      <div className="clans">
        <ul>
          <Link to="assamita">
            <li>Assamita</li>
          </Link>
          <Link to="brujah">
            <li>Brujah</li>
          </Link>
          <Link to="gangrel">
            <li>Gangrel</li>
          </Link>
          <Link to="giovanni">
            <li>Giovanni</li>
          </Link>
          <Link to="sombra">
            <li>La Sombra</li>
          </Link>
          <Link to="malkavians">
            <li>Malkavians</li>
          </Link>
          <Link to="nosferatu">
            <li>Nosferatu</li>
          </Link>
          <Link to="ravnos">
            <li>Ravnos</li>
          </Link>
          <Link to="seguidores">
            <li>Seguidores de Set</li>
          </Link>
          <Link to="toreador">
            <li>Toreador</li>
          </Link>
          <Link to="tremere">
            <li>Tremere</li>
          </Link>
          <Link to="ventrue">
            <li>Ventrue</li>
          </Link>
        </ul>
      </div>
    );
  }
});

module.exports = Clans;
