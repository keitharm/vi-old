'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} = React;

var {
  VITalkUtil
} = require('NativeModules');


var Home = React.createClass({
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
    return {
      spoken: 'Press and speak command...'
    }
  },

  getDefaultProps: function() {
    return {};
  },

  render: function() {
    return (
      <Image 
        style={styles.container} 
        source={require('image!vibackground')}>
          <TouchableHighlight style={styles.backdropView} underlayColor='transparent'>
            <View style={styles.inner}>
              <Text style={styles.title}>Vi</Text>
              <Text style={styles.spoken}>{ this.state.spoken }</Text>
            </View>
          </TouchableHighlight>
      </Image>
    );
  },

  /*----------  Custom Functions  ----------*/
  
  startListening: function(){
    /* Start recognition */
  },

  speak: function(message){
    VITalkUtil.speak(
      message,
      function errorCallback(results) {
        console.log('Error: ', results);
      },
      function successCallback(results){
        console.log('You heard ', results);
      }
    )
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

module.exports = Home;

