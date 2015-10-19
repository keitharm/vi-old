const React = require('react-native');
const MyApps = require('../MyApps/MyApps')
const Home = require('../Home/Home');
const AppStore = require('../AppStore/AppStore');
const Palette = require('../styles/Palette');
const Settings = require('../Settings/Settings');
const {
  TabBarIOS,
  Text,
  View,
} = React;

class Navigator extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'home',
    }
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
        systemIcon='featured'
        selected={this.state.selectedTab === 'home'}
        onPress = {() => {
          this.changeTab('home')
        }}>
          <Home />
        </TabBarIOS.Item>
        <TabBarIOS.Item
        systemIcon='bookmarks'
        selected={this.state.selectedTab === 'myapps'}
        onPress = {() => {
          this.changeTab('myapps');
        }}>
          <MyApps />
        </TabBarIOS.Item>
        <TabBarIOS.Item
        systemIcon='search'
        selected={this.state.selectedTab === 'appstore'}
        onPress = {() => {
          this.changeTab('appstore');
        }}>
          <AppStore />
        </TabBarIOS.Item>
        <TabBarIOS.Item
        systemIcon='more'
        selected={this.state.selectedTab === 'settings'}
        onPress = {() => {
          this.changeTab('settings');
        }}>
          <Settings />
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }

  changeTab(tabName) {
    this.setState({
      selectedTab: tabName
    });
  }

}

module.exports = Navigator;