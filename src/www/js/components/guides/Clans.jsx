/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Clans = React.createClass({

  render: function() {
    return (
      <div className="clans">
        <ul>
        	<Link to="ventrue">
            <li>Ventrue</li>
          </Link>
          <li>Brujah</li>
        </ul>
      </div>
    );
  }
});

module.exports = Clans;
