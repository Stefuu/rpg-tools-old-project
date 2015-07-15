/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Guide = React.createClass({

  render: function() {
    return (
      <div className="guide">
        <ul>
        	<Link to="vampire">
        		<li>Vampire</li>
        	</Link>
        </ul>
      </div>
    );
  }
});

module.exports = Guide;
