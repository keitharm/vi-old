'use strict';

var React = require('react-native');

var {
  Text,
  View,
  SwitchIOS,
} = React;

var SubSetting = React.createClass({
  getInitialState: function(){
    var self = this;
    return {
      onOff: self.props.onOff,
      description: self.props.description,
    }
  },
  render: function() {
    var self = this;
    return (
      <View>
        <Text> 
          {this.state.description}
        </Text>
        <SwitchIOS
          onValueChange={(value) => self.setState({onOff: value})}
          style={{marginBottom: 10}}
          value={this.state.onOff} />
      </View>
    );
  }
});

module.exports = SubSetting;