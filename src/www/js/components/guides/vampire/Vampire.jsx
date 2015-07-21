/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Vampire = React.createClass({

  render: function() {
    return (
      <div className="vampire">
        <ul>
        	<Link to="clans">
        	 <li>Clans</li>
        	</Link>
          <Link to="disciplinas">
        	 <li>disciplinas</li>
          </Link>
        </ul>
      </div>
    );
  }
});

module.exports = Vampire;
