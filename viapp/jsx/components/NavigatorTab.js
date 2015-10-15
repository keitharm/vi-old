var React = require('react-native'),
	Home = require('./Home.js');
	// Search = require('./Search.js');
  // MyApps = require('./MyApps.js');

var {
	TabBarIOS
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
				</TabBarItemIOS>
				<TabBarItemIOS
					selected = {this.state.selectedTab === 'myapps'}
					systemIcon = 'bookmarks'
					onPress = {() => {
						this.setState({
							selectedTab: 'myapps'
						});
					}}>
				</TabBarItemIOS>
        <TabBarItemIOS
         selected = {this.state.selectedTab === 'search'}
         systemIcon = 'search'
         onPress = {() => {
           this.setState({
             selectedTab: 'search'
           });
         }}>
        </TabBarItemIOS>
			</TabBarIOS>
		);
	}
});

module.exports = NavigatorTab;

// // <TabBarItemIOS
// // 	selected = {this.state.selectedTab === 'settings'}
// // 	systemIcon = 'more'
// // 	onPress = {() => {
// // 		this.setState({
// // 			selectedTab: 'settings'
// // 		});
// // 	}}>
// // </TabBarItemIOS>