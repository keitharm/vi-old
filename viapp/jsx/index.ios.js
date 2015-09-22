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
  TouchableHighlight
} = React;

var {
  VISpeechUtil
} = require('NativeModules');

var viapp = React.createClass({
  getInitialState: function(){
    return {
      message: ''
    }
  },

  speakBack: function(){
    var message = this.state.message || 'hello';
    
    VISpeechUtil.speak(
      message,
      function errorCallback(results) {
        alert('Error: ', results.toString());
      },
      function successCallback(results){
        chat.run('hello ' + results.toString());
      }
    )
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(message) => this.setState({message})}
          value={this.state.message}
        />
        <TouchableHighlight onPress={this.speakBack}>
          <View>
            <Text>
              Button
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('viapp', () => viapp);
