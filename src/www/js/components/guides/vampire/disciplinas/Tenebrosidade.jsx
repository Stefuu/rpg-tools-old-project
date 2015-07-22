/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Tenebrosidade = React.createClass({

  render: function() {
    return (
      <div className="tenebrosidade">
        <span>
          Tenebrosidade é bla bla.
        </span>
      </div>
    );
  }
});

module.exports = Tenebrosidade;
