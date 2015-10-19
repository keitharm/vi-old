const React = require('react-native');
const Palette = require('../styles/Palette');

const {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} = React;

class Home extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <View>
        <Text>LUNA</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  backdropView: {
    height: 250,
    width: 250,
    marginLeft: 65,
    borderColor: 'rgba(255,255,255,0.6)',
    borderWidth: 2,
    borderRadius: 250,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  inner: {
    marginTop: 50,
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
  },
  spoken: {
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
  },
});

module.exports = Home;