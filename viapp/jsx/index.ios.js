/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
/* Will eventually be a library of all the applications available */
var Vi = require('./viapi.js');

/* Sample application */
var chat = new Vi.App({
  title: "chat",
  commands: {
    "hi": function(err){
      alert('Hi!');
    },
    "hello $1": function(err, name){
      alert('Hello ' + name);
    },
    "this $1 is such a complicated $2": function(err, thing1, thing2){
      alert('This ' + thing1 + ' is such a complicated ' + thing2);
    }
  }
});

var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Image
} = React;

var {
  VISpeechUtil
} = require('NativeModules');

var viapp = React.createClass({
  getInitialState: function(){
    return {
      spoken: '...'
    }
  },

  listen: function(){
    VISpeechUtil.listen(
      true,
      function errorCallback(results){
        console.log('I errored out: ' + results.toString());
      },
      function successCallback(results){
        console.log('Running with command: ' + results.toString())
        chat.run(results.toString());
      }
    )
  },

  speak: function(message){
    message = message || '';
    VISpeechUtil.speak(
      message,
      function errorCallback(results) {
        alert('Error: ', results.toString());
      },
      function successCallback(results){
        this.setState({spoken: results.toString()});
        console.log('You heard ', results.toString());
        // chat.run('hello ' + results.toString());
      }
    )
  },

  render: function() {
    return (
      <Image 
        style={styles.container} 
        source={require('image!vibackground')}>
          <TouchableHighlight style={styles.backdropView} underlayColor='transparent' onPress={this.listen}>
            <View>
              <Text style={styles.title}>Vi</Text>
              <Text style={styles.spoken}>{ this.state.spoken }</Text>
            </View>
          </TouchableHighlight>
      </Image>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  backdropView: {
    height: 250,
    width: 250,
    marginLeft: 65,
    borderColor: 'rgba(255,255,255,0.6)',
    borderWidth: 2,
    borderRadius: 250,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  title: {
    marginTop: 40,
    fontSize: 45,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white'
  },
  spoken: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white'
  }
});

AppRegistry.registerComponent('viapp', () => viapp);
