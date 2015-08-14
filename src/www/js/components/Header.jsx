/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
   getInitialState: function() {
    return {
      open: false
    };
  },
  _toggleMenu: function(){
    this.state.open ? this.setState({open:false}) : this.setState({open:true});
  },
  render: function() {
    var menuVisibility = (this.state.open ? '' : 'hidden');
    return (
      <div className="main-header">
        <div className="top">
          <div ref="menu" className="menu" onClick={this._toggleMenu}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <ul className={menuVisibility}>
              <Link to="diceroller">
                <li>Dice Roller</li>
              </Link>
              <Link to="battlemap">
                <li>Battle Map</li>
              </Link>
              <Link to="guides">
                <li>Guides</li>
              </Link>
            </ul>
          </div>
          <div className="appName">
            <span>RPG Tools</span>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Header;
