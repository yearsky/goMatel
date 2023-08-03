import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Platform,
  StatusBar,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { activitySlice } from "../store/activitySlice";
import ActivityListHome from "../components/HomeScreens/ActivityListHome";
import HeaderOverviewCard from "../components/HomeScreens/HeaderOverviewCard";
import GreetingCard from "../components/HomeScreens/GreetingCard";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

const HomeScreen = () => {
  const yOffset = useRef(new Animated.Value(0)).current;
  const tabs = useSelector((state) => state.tabHome.tab);
  const [selectedTab, setSelectedTab] = useState("");
  const dataActivity = useSelector((state) => state.activityItems);
  const username = useSelector((state) => state.auth.username);
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greetingMessage = "";

  // Menentukan pesan selamat berdasarkan waktu saat ini
  if (currentHour < 12) {
    greetingMessage = "Selamat Pagi,";
  } else if (currentHour < 18) {
    greetingMessage = "Selamat Siang,";
  } else {
    greetingMessage = "Selamat Malam,";
  }

  return (
    <>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "light-content" : "dark-content"}
        backgroundColor="#E9B384"
      />
      <Animated.ScrollView
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
        contentContainerStyle={
          {
            // paddingTop: deviceHeight * 0.07,
          }
        }
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
        <GreetingCard greetingMessage={greetingMessage} username={username} />

        <HeaderOverviewCard data={dataActivity} />

        <ActivityListHome data={dataActivity} />
      </Animated.ScrollView>
    </>
  );
};

export default HomeScreen;
