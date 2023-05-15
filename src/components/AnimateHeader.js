import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Animated } from "react-native";
const AnimatedHeader = ({ animatedValue }) => {
  const insets = useSafeAreaInsets();

  const headerHeight = animatedValue.interpolate({
    inputRange: [0, 200 + insets.top],
    outputRange: [200 + insets.top, insets.top + 44],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        backgroundColor: "black",
      }}
    />
  );
};
export default AnimatedHeader;
