'use strict';

var React = require('react-native');

/* Importing Example Apps - Should be minified and pushed into single file */
var ChatApp = require('./sample_apps/exampleChatApp.js');
var GitApp = require('./sample_apps/exampleGitApp.js');

// /* Custom Components */
var Home = require('./components/Home');

var {
  AppRegistry,
  Navigator
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
      <Navigator
        initialRoute={{ name: 'First Scene', index: 0 }} 
        renderScene={(route, navigator) =>
          <Home 
            name={route.name}
            onForward={() => {
             var nextIndex = route.index + 1;
             navigator.push({
                name: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    );
  }

  /*----------  Custom Functions  ----------*/
});


/* Registry is for entry point for app */

AppRegistry.registerComponent('viapp', () => viapp);

module.exports = viapp;
