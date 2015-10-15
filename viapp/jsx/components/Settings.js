var React = require('react-native'),
    SubSetting = require('./SubSetting.js');

var {
  StyleSheet,
  View,
  ListView,
  SwitchIOS,
} = React;

var Settings = React.createClass({
  componentWillMount: function(){
  },
  componentWillUnmount: function(){
  },
  componentDidMount: function(){
  },
  getInitialState: function(){
    var self = this;
    var settings = [
      {
        description: "Allow Vi to listen at all times",
        options: [
          {
            name: "Always listen",
            onOff: false,
          },
          {
            name: "Bogus",
            onOff: true,
          },
        ]
      },
      {
        description: "Update notifications",
        options: [
          {
            name: "Check for update",
            onOff: true,
          },
          {
            name: "Bogus",
            onOff: false,
          },
        ]
      }
    ]

    var ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    return {
      dataSource: ds.cloneWithRows(settings)
    };
  },
  render: function() {
    return (
      <ListView
        dataSource = {this.state.dataSource}
        renderRow={this.renderSetting}
        style={styles.listView}
      >
      </ListView>
    );
  },
  renderSetting: function(setting){
    return (
      <View>
          <SubSetting setting={setting}/>
      </View>
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

module.exports = Settings;