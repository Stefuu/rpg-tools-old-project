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
        		<li> Clans</li>
        	</Link>
        	<li> Disciplinas</li>
        </ul>
      </div>
    );
  }
});

module.exports = Vampire;
