/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

/* Importing Example Apps */
var ChatApp = require('./exampleAppChatterbox.js');
var GitApp = require('./exampleGitApp.js');

var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Image,
  NativeAppEventEmitter
} = React;

var {
  VISpeechUtil
} = require('NativeModules');

var viapp = React.createClass({
  componentWillMount: function(){
    VISpeechUtil.initSpeech();
  },

  componentWillUnmount: function(){
    heardMessage.remove();
  },

  componentDidMount: function(){
    GitApp.run('what was my last commit', function(shout){
      this.speak(shout);
      console.log("Shouted!");
    }.bind(this));
    var heardMessage = NativeAppEventEmitter.addListener(
      'HeardPhrase',
      function(body){
        console.log('Heard ' + body.message);
        this.setState({spoken: body.message});

        // GitApp.run(body.message.toString(), function(commit, repo){
        //   this.speak('Your most recent commit is ' + commit ' from the repo ' + repo + '');
        // });
      }.bind(this)
    );
  },

  getInitialState: function(){
    return {
      spoken: 'Press and speak command...'
    }
  },

  startListening: function(){
    VISpeechUtil.listen(
      true,
      function errorCallback(results){
        // console.log('Listener errored out.' + results);
      },
      function successCallback(results){
        // console.log('Listening!');
      }
    )
  },

  stopListening: function(){
    VISpeechUtil.listen(
      false,
      function errorCallback(results){
        // console.log('Listener errored out.' + results);
      },
      function successCallback(results){
        // console.log('Listening!');
      }
    )
  },

  speak: function(message){
    VISpeechUtil.speak(
      message,
      function errorCallback(results) {
        console.log('Error: ', results);
      },
      function successCallback(results){
        console.log('You heard ', results);
      }
    )
  },

  render: function() {
    return (
      <Image 
        style={styles.container} 
        source={require('image!vibackground')}>
          <TouchableHighlight style={styles.backdropView} underlayColor='transparent' onPressIn={this.startListening} onPress={this.stopListening}>
            <View style={styles.inner}>
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
  inner: {
    marginTop: 50
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white'
  },
  spoken: {
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white'
  }
});

AppRegistry.registerComponent('viapp', () => viapp);
