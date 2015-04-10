/** @jsx React.DOM */

var React = require('react');

var Content = React.createClass({
  render: function() {
    return (
      <div className="main-content">
        <img height="41%" src="assets/img/dices.png" />
        <div className="feature-label dice-roller">
          <span className="title">Dice Roll</span>
          <span className="desc">Select witch and how many dices you want to roll</span>
        </div>
        <img height="62%" src="assets/img/books.jpg" />
        <div className="feature-label guide-book">
          <span className="title">Guide Book</span>
          <span className="desc">Books to guide your adventure</span>
        </div>
      </div>
    );
  }
});

module.exports = Content;
