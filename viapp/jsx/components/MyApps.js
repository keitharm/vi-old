'use strict';

var React = require('react-native');
var Palette = require('./Palette');
var {
  StyleSheet,
  View,
  ListView,
  Text,
  Image
} = React;

var MyApps = React.createClass({
  render: function() {
    if (!this.state.loaded)
      return this.renderLoadingView();

    return (
      <ListView
        dataSource = {this.state.dataSource}
        renderRow={this.renderApp}
        style={styles.listView}
      >
      </ListView>
    );
  },
  renderLoadingView: function() {
    return (
      <View style={styles.container}>
        <Text>
          Loading apps...
        </Text>
      </View>
    );
  },
  renderApp: function(app) {
    return (
      <View>
        <View style={styles.iconContainer}>
          <Image
            source={{uri: app.icon}}
            style={styles.icon}
          />
          <View style={styles.nameContainer}>
            <Text style={styles.name}>
              {app.name}
            </Text>
          </View>
        </View>
        <View style={styles.separator} />
      </View>
    );
  },
  componentDidMount: function() {
    this.fetchData();
  },
  getInitialState: function() {
    var ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    return {
      dataSource: ds,
      loaded: false,
    };
  },

  fetchData: function() {
    var self = this;
    setTimeout(function() {
      var iconLink = 'http://icons.iconarchive.com/icons/igh0zt/ios7-style-metro-ui/512/MetroUI-Apps-Mac-App-Store-icon.png';
      var apps = [
        {
          name: 'OPTC Timer',
          icon: iconLink,
        },
        {
          name: 'Instajam',
          icon: iconLink,
        },
        {
          name: 'midiKeys',
          icon: iconLink,
        },
        {
          name: 'Stalk.io',
          icon: iconLink,
        },
        {
          name: 'Heat-out',
          icon: iconLink,
        },
      ];
      var ds = self.state.dataSource.cloneWithRows(apps);
      self.setState({
        dataSource: ds,
        loaded: true,
      })
    }, 500);
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


module.exports = MyApps;