'use strict';

var React = require('react-native');

/* Importing Example Apps - Should be minified and pushed into single file */
var ChatApp = require('./sample_apps/exampleChatApp.js');
var GitApp = require('./sample_apps/exampleGitApp.js');

// /* Custom Components */
var Home = require('./components/Home');
var Tab = require('./components/NavigatorTab');

var {
  AppRegistry,
  Navigator,
  View
} = React;

var viapp = React.createClass({
  /*----------  Lifecycles  ----------*/

  componentWillMount: function(){
    /* Will initialize Speech Recognition */
  },

  componentWillUnmount: function(){
    /* End recognition/decativate Speech Recognition */
  },

  componentDidMount: function(){
    /*  */
  },

  /*----------  Initialization & Render  ----------*/

  getInitialState: function(){
    return {};
  },

  getDefaultProps: function() {
    return {};
  },

  render: function() {
    return (
      <Tab />
    );
  }

  /*----------  Custom Functions  ----------*/
});


/* Registry is for entry point for app */

AppRegistry.registerComponent('viapp', () => viapp);

module.exports = viapp;
