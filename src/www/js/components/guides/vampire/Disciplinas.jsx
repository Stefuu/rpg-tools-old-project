/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Internationalization = require('./../../../modules/Internationalization.js');
var Json = Internationalization.chooseLanguage();

var Disciplinas = React.createClass({

  render: function() {
    return (
      <div className="disciplinas">
        <header>
          <h1>{Json.guias.vampiro.disciplinas.title}</h1>
          <div className="img-container">
            <img src="assets/img/disciplinas.jpg" />
          </div>
        </header>
        <ul>
        	<Link to="animalismo">
            <li className="itemBtn seta-direita">{Json.guias.vampiro.disciplinas.animalismo.title}</li>
          </Link>
          <Link to="auspicios">
            <li className="itemBtn seta-direita">{Json.guias.vampiro.disciplinas.auspicios.title}</li>
          </Link>
          <Link to="dominacao">
            <li className="itemBtn seta-direita">{Json.guias.vampiro.disciplinas.dominacao.title}</li>
          </Link>
          <Link to="fortitude">
            <li className="itemBtn seta-direita">{Json.guias.vampiro.disciplinas.fortitude.title}</li>
          </Link>
          <Link to="metamorfose">
            <li className="itemBtn seta-direita">{Json.guias.vampiro.disciplinas.metamorfose.title}</li>
          </Link>
          <Link to="ofuscacao">
            <li className="itemBtn seta-direita">{Json.guias.vampiro.disciplinas.ofuscacao.title}</li>
          </Link>
          <Link to="potencia">
            <li className="itemBtn seta-direita">{Json.guias.vampiro.disciplinas.potencia.title}</li>
          </Link>
          <Link to="presenca">
            <li className="itemBtn seta-direita">{Json.guias.vampiro.disciplinas.presenca.title}</li>
          </Link>
          <Link to="quietus">
            <li className="itemBtn seta-direita">{Json.guias.vampiro.disciplinas.quietus.title}</li>
          </Link>
          <Link to="quimerismo">
            <li className="itemBtn seta-direita">{Json.guias.vampiro.disciplinas.quimerismo.title}</li>
          </Link>
          <Link to="rapidez">
            <li className="itemBtn seta-direita">{Json.guias.vampiro.disciplinas.rapidez.title}</li>
          </Link>
          <Link to="serpentis">
            <li className="itemBtn seta-direita">{Json.guias.vampiro.disciplinas.serpentis.title}</li>
          </Link>
          <Link to="taumaturgia">
            <li className="itemBtn seta-direita">{Json.guias.vampiro.disciplinas.taumaturgia.title}</li>
          </Link>
          <Link to="tenebrosidade">
            <li className="itemBtn seta-direita">{Json.guias.vampiro.disciplinas.tenebrosidade.title}</li>
          </Link>
          <Link to="vicissitude">
            <li className="itemBtn seta-direita">{Json.guias.vampiro.disciplinas.vicissitude.title}</li>
          </Link>
        </ul>
      </div>
    );
  }
});

module.exports = Disciplinas;
