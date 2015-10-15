var React = require('react-native');

var Option = require('./Option.js');

var {
  StyleSheet,
  Text,
  View,
  SwitchIOS,
  ListView,
} = React;

var SubSetting = React.createClass({
  getInitialState: function(){
    var self = this;

    var ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    return {
      dataSource: ds.cloneWithRows(self.props.setting.options)
    };
  },
  render: function() {
    var self = this;
    return (
      <View>
        <Text> {self.props.setting.description} </Text>
        <ListView
          dataSource = {this.state.dataSource}
          renderRow={this.renderOption}
          style={styles.listView}
        >
        </ListView>
      </View>
    );
  },
  renderOption: function(option){
    var self = this;
    return (
      <Option details={option} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#FFF',
  },
  nameContainer: {
    flex: 1,
    paddingLeft: 20,
  },
  name: {
    fontSize: 20,
    color: '#212121',
  },
  icon: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#FFF',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCC'
  },
});

module.exports = SubSetting;