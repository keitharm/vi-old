'use strict';

var React = require('react-native');
var Home = require('./Home');
var Search = require('./Search');
var MyApps = require('./MyApps');
var Settings = require('./Settings');
var Palette = require('../constants/Palette');

var {
  TabBarIOS,
} = React;

var TabBarItemIOS = TabBarIOS.Item

var NavigatorTab = React.createClass({
  componentWillMount: function(){
  },
  componentWillUnmount: function(){
  },
  componentDidMount: function(){
  },
  getInitialState: function(){
    return {
  		selectedTab: 'home'
  	};
  },
  render: function(){
    return (
      <TabBarIOS selectedTab = {this.state.selectedTab}>
        <TabBarItemIOS
          selected = {this.state.selectedTab === 'home'}
          systemIcon = 'featured'
          onPress = {() => {
            this.setState({
              selectedTab: 'home'
            });
        }}>
          <Home />
        </TabBarItemIOS>
        <TabBarItemIOS
          selected = {this.state.selectedTab === 'myapps'}
          systemIcon = 'bookmarks'
          onPress = {() => {
            this.setState({
              selectedTab: 'myapps'
            });
          }}>
          <MyApps />
        </TabBarItemIOS>
        <TabBarItemIOS
          selected = {this.state.selectedTab === 'search'}
          systemIcon = 'search'
          onPress = {() => {
            this.setState({
              selectedTab: 'search'
            });
        }}>
          <Search />
        </TabBarItemIOS>
        <TabBarItemIOS
          selected = {this.state.selectedTab === 'settings'}
          systemIcon = 'more'
          onPress = {() => {
            this.setState({
              selectedTab: 'settings'
            });
          }}>
          <Settings />
		    </TabBarItemIOS>
			</TabBarIOS>
		);
	}
});

module.exports = NavigatorTab;