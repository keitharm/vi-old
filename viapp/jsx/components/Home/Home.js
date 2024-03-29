const React = require('react-native');
const Palette = require('../styles/Palette'); 
const Dimensions = require('Dimensions');
const windowSize = Dimensions.get('window');

const CIRCLE_SIZE = windowSize.width*0.85;

const {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Animated,
  PanResponder,
} = React;

class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
        listening: false,
        pan: new Animated.ValueXY()
    };
  }

  componentWillMount() {
    this._animatedValueX = 0;
    this._animatedValueY = 0; 
    this.state.pan.x.addListener((value) => this._animatedValueX = value.value);
    this.state.pan.y.addListener((value) => this._animatedValueY = value.value);
    
        this._panResponder = PanResponder.create({
          onMoveShouldSetResponderCapture: () => true,
          onMoveShouldSetPanResponderCapture: () => true,
          onPanResponderGrant: (e, gestureState) => {
            console.log('hit');
            this.state.pan.setOffset({x: this._animatedValueX, y: this._animatedValueY});
            this.state.pan.setValue({x: 0, y: 0});
          },
          onPanResponderMove: Animated.event([
                null, {dx: this.state.pan.x, dy: this.state.pan.y},
          ]),
          onPanResponderRelease: () => {
            this.state.listening = !this.state.listening;
            console.log(this.state.listening);
            Animated.spring(this.state.pan, {
              toValue: 0
            }).start();

            if(this.state.listening){
              
            }
          }
        });
  }

  componentWillUnmount() {
    this.state.pan.x.removeAllListeners();  
    this.state.pan.y.removeAllListeners();
  }

  getStyle() {
    return [
              styles.circle, 
              {
                transform: [
                  {
                    translateX: this.state.pan.x
                  },
                  {
                    translateY: this.state.pan.y
                  },
                ]
              },
              {
                opacity: this.state.pan.y.interpolate({inputRange: [-300, 0, 300], outputRange: [0.5, 1, 0.5]})
              }
            ];
  }

  render() {
    return (
      <View style={styles.container}
       {...this._panResponder.panHandlers}>
        <Animated.View 
          style={this.getStyle()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingLeft: 0,
    marginLeft: 0,
    flexDirection: 'column',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: 'black',
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE/2,
    backgroundColor: 'blue',
    marginBottom: -CIRCLE_SIZE/2,
  } 
});

module.exports = Home;