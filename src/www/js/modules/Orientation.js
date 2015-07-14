/** @jsx React.DOM */
/* jshint node:true */
/* jshint browser:true */

var Orientation = {
  getOrientationByScreenSize: function(){
    var orientation = ( window.outerWidth > window.outerHeight ) ? 'landscape' : 'portrait';
    return orientation;
  }
};

module.exports = Orientation;
