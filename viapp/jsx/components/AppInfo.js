'use strict';

import React from 'react-native';

const {
  StyleSheet,
  View,
  Text,
  ListView,
  Image,
  TouchableNativeFeedback,
  TouchableHighlight,
  Platform,
} = React;

const AppInfo = React.createClass({
  render() {
    let TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android')
      TouchableElement = TouchableNativeFeedback;

    // var app = this.state.app;
    const app = {
      name: 'OPTC Timer',
      description: 'Get notified of your turtle times and never miss another!',
      commands: [
        {
          command: 'When is turtle time?',
          description: 'Notifies you of the turtle time',
          options: ''
        },
        {
          command: 'Notify me X minutes in advance',
          description: 'Sets your notification time to 10 minutes prior',
          options: 'any number of minutes'
        },
        {
          command: 'Set my ID to X',
          description: 'Sets your ID to X',
          options: 'digit from 0 to 9'
        },
        {
          command: 'Set my time format to X',
          description: 'Sets your time format to X',
          options: 'standard, military'
        },
        {
          command: 'Set my version to X',
          description: 'Sets your game version to X',
          options: 'global, japan'
        },
        {
          command: 'X sound on notifications',
          description: 'Set sound options for notification',
          options: 'enable, disable'
        },
      ],
      icon: 'http://icons.iconarchive.com/icons/igh0zt/ios7-style-metro-ui/512/MetroUI-Apps-Mac-App-Store-icon.png',
    };

    let dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    const ds = dataSource.cloneWithRows(app.commands);
    return (
      <View>
        <View style={styles.topBar}>
          <Text style={styles.name}>
            {app.name}
          </Text>
          <View>
            <TouchableElement
              style={styles.button}
              onPress={this.goBack.bind(this)}>
              <Text style={styles.buttonText}>
                BACK
              </Text>
            </TouchableElement>
          </View>
        </View>
        <View style={styles.iconContainer}>
          <Image
            source={{uri: app.icon}}
            style={styles.icon}
          />
        </View>
        <View>
          <Text>
            {app.description}
          </Text>
        </View>
        <ListView
          dataSource={ds}
          renderRow={this.renderCommand}
          style={styles.listView}
        />
      </View>
    );
  },

  renderCommand(data) {
    return (
      <View>
      <View>
        <Text style={styles.command}>
          "{data.command}"
        </Text>
        <Text style={styles.description}>
          {data.description}
        </Text>
        <Text style={styles.options}>
          options: "{data.options}"
        </Text>
      </View>
      <View style={styles.separator} />
      </View>
    );
  },

  goBack() {
    console.log('going back');
  }
});


const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#03A9F4',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 150,
    height: 150,
  },
  name: {
    fontSize: 28,
    color: '#FFF',
    paddingTop: 10,
  },
  buttonContainer: {
    justifyContent: 'flex-end',
  },
  button: {
    // width: 60,
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF',
  },
  listView: {
    paddingTop: 15,
    backgroundColor: '#FFF',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCC'
  },
  command: {
    fontSize: 16,
  },
  description: {
    fontSize: 16,
    marginLeft: 5,
  },
  options: {
    fontSize: 16,
    marginLeft: 5
  }
});


export default AppInfo;
