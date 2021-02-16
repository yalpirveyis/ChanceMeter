import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
  Easing,
  Image,
} from "react-native";

const DEVICE_WIDTH = Dimensions.get("window").width;

export default class Delay extends Component {
  state = {
    animation: new Animated.Value(0),
  };

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation = () => {
    Animated.loop(
      Animated.timing(this.state.animation, {
        duration: 850,
        toValue: -20,
        easing: Easing.cubic,
      })
    ).start();
  };

  render() {
    const animationStyles = {
      right: this.state.animation,
    };

    return (
      <View style={[styles.container, { ...this.props.style }]}>
        <Animated.View style={[styles.car, animationStyles]}>
          <Image
            style={{
              width: 20,
              height: 20,
              transform: [{ rotateZ: "-90deg" }],
              tintColor: "black",
            }}
            source={require("../assets/icons/arrow.png")}
          />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 10,
    width: 40,
  },
  car: {
    position: "relative",
    width: 20,
    height: 20,
  },
});
