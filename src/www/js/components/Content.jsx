/** @jsx React.DOM */

var React = require('react');

var Content = React.createClass({
  render: function() {
    return (
      <div className="main-content">
        <div className="feature dices">
          <img height="41%" src="assets/img/dices.png" />
          <div className="feature-label">
            <span className="title">Dice Roll</span>
            <span className="desc">Select witch and how many dices you want to roll</span>
          </div>
        </div>
        <div className="feature books">
          <img height="59%" src="assets/img/books.jpg" />
          <div className="feature-label">
            <span className="title">Guide Book</span>
            <span className="desc">Books to guide your adventure</span>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Content;
