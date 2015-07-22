/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Disciplinas = React.createClass({

  render: function() {
    return (
      <div className="disciplinas">
        <ul>
        	<Link to="animalismo">
            <li>Animalismo</li>
          </Link>
          <Link to="auspicios">
            <li>Auspicios</li>
          </Link>
          <Link to="dominacao">
            <li>Dominação</li>
          </Link>
          <Link to="fortitude">
            <li>Fortitude</li>
          </Link>
          <Link to="metamorfose">
            <li>Metamorfose</li>
          </Link>
          <Link to="ofuscacao">
            <li>Ofuscação</li>
          </Link>
          <Link to="potencia">
            <li>Potencia</li>
          </Link>
          <Link to="presenca">
            <li>Presença</li>
          </Link>
          <Link to="quietus">
            <li>Quietus</li>
          </Link>
          <Link to="quimerismo">
            <li>Quimerismo</li>
          </Link>
          <Link to="rapidez">
            <li>Rapidez</li>
          </Link>
          <Link to="serpentis">
            <li>Serpentis</li>
          </Link>
          <Link to="taumaturgia">
            <li>Taumaturgia</li>
          </Link>
          <Link to="tenebrosidade">
            <li>Tenebrosidade</li>
          </Link>
          <Link to="vicissitude">
            <li>Vicissitude</li>
          </Link>
        </ul>
      </div>
    );
  }
});

module.exports = Disciplinas;
