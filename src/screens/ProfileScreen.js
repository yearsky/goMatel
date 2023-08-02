import {
  Text,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetState } from "../store/authSlice";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const username = useSelector((state) => state.auth.username);

  const handleLogout = () => {
    dispatch(resetState());
  };

  return (
    <SafeAreaView>
      <ScrollView style={{ marginVertical: 10 }}>
        <View className="mx-5 px-5 mt-5 py-5 bg-white rounded-md">
          <View
            className="bg-orange-300 rounded-md relative"
            style={{ height: deviceHeight * 0.2 }}
          >
            <SafeAreaView className="flex absoulte top-14">
              <View className="flex-row justify-center mb-2">
                <Image
                  source={require("../../assets/login.png")}
                  style={{ width: 100, height: 100 }}
                  className="rounded-full bg-white"
                />
              </View>
            </SafeAreaView>
          </View>
          <Text className="text-center mt-12">{username}</Text>
        </View>

        <View className="bg-white mt-5 mb-3 px-5 py-5 mx-5 rounded-md">
          <Text
            style={{
              fontFamily: "louis",
            }}
            className="font-black text-black text-[20px] mb-5"
          >
            Informasi Profile
          </Text>
          <View className="my-10 flex flex-col gap-y-2">
            <View className="flex flex-row items-center gap-3">
              <Ionicons name="mail" size={30} color="grey" />
              <Text>Email</Text>
              <Text className="flex-1 text-black font-bold text-right">
                test@gmail.com
              </Text>
            </View>
            <View className="flex flex-row items-center gap-3">
              <Ionicons name="time-outline" size={30} color="grey" />
              <Text>Tanggal Daftar</Text>
              <Text className="flex-1 text-black font-bold text-right">
                10 Januari 2023
              </Text>
            </View>
            <View className="flex flex-row items-center gap-3">
              <Ionicons name="log-in-outline" size={30} color="grey" />
              <Text>Terakhir Login</Text>
              <Text className="flex-1 text-black font-bold text-right">
                2023-03-03 08:00
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={handleLogout}
          disabled={loading}
          className="py-3 bg-yellow-400 rounded-xl mx-5"
        >
          {loading ? (
            <ActivityIndicator size="small" color="#ffffff" />
          ) : (
            <Text
              className="text-xl font-bold text-center text-white"
              style={{ fontWeight: "bold" }}
            >
              Logout
            </Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
