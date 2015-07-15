/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Guides = React.createClass({

  render: function() {
    return (
      <div className="guides">
        <ul>
        	<Link to="vampire">
        		<li>Vampire</li>
        	</Link>
        	<li>D&amp;D</li>
        </ul>
      </div>
    );
  }
});

module.exports = Guides;
