'use strict';

var React = require('react-native');
var Palette = require('../constants/Palette');

var {
  StyleSheet,
  Text,
  View,
  SwitchIOS,
} = React;

var Option = React.createClass({
  getInitialState: function() {
    var self = this;
    return {
      name: self.props.details.name,
      onOff: self.props.details.onOff,
    }
  },
  render: function() {
    var self = this;
    return (
    <View>
      <Text>
        {self.state.name}
      </Text>
      <SwitchIOS
        onValueChange={(value) => this.setState({onOff: value})}
        value={this.state.onOff} />
    </View>
    );
  }
});

module.exports = Option;