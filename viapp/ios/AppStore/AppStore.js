const React = require('react-native');
const Palette = require('../styles/Palette');

const {
  StyleSheet,
  Text,
  View,
  TextInput,
  ListView,
  Image,
} = React;

class AppStore extends React.Component {
  constructor(props) {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    
    this.state = {
      dataSource: ds,
      loaded: false,
    };

    this.renderApp = this.renderApp.bind(this);
  }

  render() {
    if (!this.state.loaded) {
      return (
        <View>
          <Text>Loading apps...</Text>
        </View>
      );
    }

    return (
      <View>

        <Text style={styles.header}>
          Search for Vi Apps
        </Text>

        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 3, }}
        placeholder="Search"
        textAlign="center"
        onChangeText={(text) => this.fetchData()}
        />

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderApp}
          style={styles.listView}
        />

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
    fetch("https://randomapi.com/api/?key=Z5J1-1QP0-68VY-D7R1&id=794x6oa&results=25&noinfo")
    .then((response) => response.json())
    .then((responseData) => {
      console.log('------------');
      console.log('------------');
      console.log('------------');
      console.log('------------');
      console.log('------------');
      console.log('------------');
      console.log('------------');
      console.log('------------');
      console.log('------------');
      console.log('------------');
      console.log('this.state =', this.state);
      var apps = [];
      responseData.results.forEach(function(app) {
        apps.push({name: app.app.name, icon: app.app.iconImage});
      });
      var ds = this.state.dataSource.cloneWithRows(apps);
      this.setState({
        dataSource: ds,
        loaded: true,
      });
      console.log('this.state =', this.state);
    });
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: 15,
    fontSize: 24,
    textAlign: 'center'
  },
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

module.exports = AppStore;