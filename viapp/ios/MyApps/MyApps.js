const React = require('react-native');
const Palette = require('../styles/Palette');
const {
  View,
  ListView,
  Text,
  Image,
  StyleSheet,
} = React;

class MyApps extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource: ds,
      loaded: false,
    };

  }

  render() {
    if (!this.state.loaded)
      return this.renderLoadingView();

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderApp}
        style={styles.listView}
      />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading apps...
        </Text>
      </View>
    );
  }

  renderApp(app) {
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
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    setTimeout(() => {
      const iconLink = 'http://icons.iconarchive.com/icons/igh0zt/ios7-style-metro-ui/512/MetroUI-Apps-Mac-App-Store-icon.png';
      const apps = [
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
      const dataSource = this.state.dataSource.cloneWithRows(apps);
      this.setState({
        dataSource: dataSource,
        loaded: true,
      });

    }, 500);
  }

}

const styles = StyleSheet.create({
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
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#FFF',
  },
  nameContainer: {
    flex: 1,
    paddingLeft: 20,
  },
  name: {
    fontSize: 20,
    fontFamily: Palette.type,
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
    backgroundColor: Palette.divider,
  },
});

module.exports = MyApps;