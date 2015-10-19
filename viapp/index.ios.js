const React = require('react-native');
const Navigator = require('./ios/Navigator/Navigator');
const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

const luna = React.createClass({
  render: function() {
    return (
      <Navigator />
    );
  }
});

const styles = StyleSheet.create({
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

AppRegistry.registerComponent('luna', () => luna);
