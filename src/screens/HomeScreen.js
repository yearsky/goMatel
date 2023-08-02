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
        <View className="bg-[#E9B384] pb-20 flex-row justify-between items-center rounded-b-3xl">
          <View>
            <Text
              style={{
                paddingLeft: deviceWidth * 0.07,
                fontWeight: "500",
                fontFamily: "louis",
              }}
              className="text-black text-left text-[20px]"
            >
              {greetingMessage}
            </Text>
            <Text
              style={{
                paddingLeft: deviceWidth * 0.07,
                fontWeight: "bold",
                fontFamily: "louis",
              }}
              className="text-black text-left text-[20px] pt-2"
            >
              {username}
            </Text>
          </View>
          <TouchableOpacity className="rounded-full p-1 mr-10 bg-black">
            <Ionicons name="notifications" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View className="bg-white mx-7 -mt-10 p-5 border rounded-xl flex-row justify-around items-center">
          <View className="my-2 flex-col items-center gap-y-2 max-w-md">
            <View className="flex-row items-center gap-x-2">
              <Ionicons name="newspaper-outline" size={24} />
              <Text>Data Nopol</Text>
            </View>
            <TouchableOpacity className="bg-blue-400 px-3 py-1 rounded-full">
              <Text className="text-center text-white text-clip">
                {dataActivity.activityItems.length} Data
              </Text>
            </TouchableOpacity>
          </View>
          <View className="w-1 rounded-xl h-full bg-black mx-5"></View>
          <View className=" my-2 flex-col items-center gap-y-2">
            <View className="flex-row items-center gap-x-2">
              <Ionicons name="timer-outline" size={24} />
              <Text>Sisa Masa Aktif</Text>
            </View>
            <TouchableOpacity className="bg-yellow-400 px-3 py-1 rounded-full">
              <Text className="text-center text-white text-clip">
                7 Hari Lagi
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mx-5 mt-14 mb-10">
          <View className="flex-row justify-between items-center">
            <Text
              style={{
                fontWeight: "500",
                fontFamily: "louis",
              }}
              className="text-lg"
            >
              Aktivitas Terbaru
            </Text>
            <View className="flex-row items-center gap-1">
              <Text
                style={{
                  fontWeight: "500",
                }}
                className="text-md text-blue-500 font-bold"
              >
                Lihat Semua
              </Text>
              <Ionicons
                name="arrow-forward-circle-outline"
                size={20}
                color="#4287f5"
              />
            </View>
          </View>

          <View className="mt-5 bg-white border border-neutral-200 divide-y divide-slate-200 rounded-xl">
            {dataActivity.activityItems.slice(0, 5).map((item) => (
              <View key={item.id} className="flex-row my-1 items-center p-2">
                <Image
                  source={require("../../assets/login.png")}
                  style={{ width: 50, height: 50 }}
                  className="rounded-full bg-white mx-1"
                />
                <View className="flex-col">
                  <Text className="text-black font-bold">{item.tiketId}</Text>
                  <Text className="text-slate-400">{item.activity}</Text>
                </View>
                <Text className="ml-auto">{item.date}</Text>
              </View>
            ))}
          </View>
        </View>
      </Animated.ScrollView>
    </>
  );
};

export default HomeScreen;
