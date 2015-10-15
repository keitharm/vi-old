var React = require('react-native')

var {
  View,
  SwitchIOS,
  Text
} = React;

var Settings = React.createClass({
  componentWillMount: function(){
  },
  componentWillUnmount: function(){
  },
  componentDidMount: function(){
  },
  getInitialState: function(){
    return {
      trueSwitchIsOn: true,
      falseSwitchIsOn: false,
    };
  },
  render: function() {
    return (
      <View>
        <View>
          <Text>
            Bogus
          </Text>
          <SwitchIOS
            onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
            style={{marginBottom: 10}}
            value={this.state.falseSwitchIsOn} />
          <SwitchIOS
            onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
            value={this.state.trueSwitchIsOn} />
        </View>
        <View>
          <SwitchIOS
	          onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
            style={{marginBottom: 10}}
            value={this.state.falseSwitchIsOn} />
          <SwitchIOS
            onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
            value={this.state.trueSwitchIsOn} />
        </View>
      </View>
    );
  }
});

module.exports = Settings;