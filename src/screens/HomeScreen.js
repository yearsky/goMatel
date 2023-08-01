import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Platform,
  StatusBar,
  Text,
  View,
} from "react-native";
import { useSelector } from "react-redux";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

const HomeScreen = () => {
  const yOffset = useRef(new Animated.Value(0)).current;
  const tabs = useSelector((state) => state.tabHome.tab);
  const [selectedTab, setSelectedTab] = useState("");
  const products = useSelector((state) => state.products.products);
  const username = useSelector((state) => state.auth.username);
  console.log(username);

  const textAnimation = {
    transform: [
      {
        scaleX: yOffset.interpolate({
          inputRange: [0, 50],
          outputRange: [1, 0],
          extrapolate: "clamp",
        }),
      },
      {
        translateX: yOffset.interpolate({
          inputRange: [0, 25],
          outputRange: [0, -100],
          extrapolate: "clamp",
        }),
      },
    ],
    opacity: yOffset.interpolate({
      inputRange: [0, 25],
      outputRange: [1, 0],
      extrapolate: "clamp",
    }),
  };

  return (
    <>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "light-content" : "dark-content"}
        backgroundColor="white"
      />
      <Animated.ScrollView
        bounce={true}
        contentContainerStyle={{
          paddingBottom: deviceHeight * 0.2,
          paddingTop: deviceHeight * 0.07,
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: yOffset,
                },
              },
            },
          ],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "black",
              right: deviceWidth * 0.05,
              position: "absolute",
              borderTopRightRadius: 20,
              padding: 20,
              borderBottomLeftRadius: 20,
            }}
          >
            <Ionicons name="notifications" size={24} color="white" />
          </View>
          <Animated.View style={{ ...textAnimation }}>
            <Text
              style={{
                color: "black",
                textAlign: "left",
                paddingLeft: deviceWidth * 0.07,
                fontSize: 20,
                fontWeight: "500",
                fontFamily: "louis",
              }}
            >
              Selamat Pagi,
            </Text>
            <Text
              style={{
                color: "black",
                textAlign: "left",
                paddingTop: 5,
                paddingLeft: deviceWidth * 0.07,
                fontSize: 42,
                fontWeight: "bold",
                fontFamily: "louis",
              }}
            >
              {username}
            </Text>
          </Animated.View>
        </View>
      </Animated.ScrollView>
    </>
  );
};

//

export default HomeScreen;
