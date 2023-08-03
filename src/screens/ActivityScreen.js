import React, { useMemo, useRef, useCallback, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Button,
  useWindowDimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../assets/styles/GlobalStyles";
import BannerHome from "../components/BannerHome";
import { productsSlice } from "../store/productsSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomBackdrop from "../components/CustomBackDrop";

const ActivityScreen = ({ navigation }) => {
  // const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState("");
  const [isVisible, setVisible] = useState(false);
  const { width } = useWindowDimensions();
  const dataActivity = useSelector((state) => state.activityItems);
  const tabs = useSelector((state) => state.tab.tab);

  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["15%", "50%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <ScrollView>
            <View>
              <View className="pb-0 bg-[#E9B384]">
                <SafeAreaView>
                  <View className="m-5 flex-row items-center justify-between">
                    <Text className="text-white text-2xl font-bold">
                      Aktivitas Anda
                    </Text>

                    <TouchableOpacity>
                      <Ionicons
                        name="search-circle-outline"
                        size={40}
                        color="white"
                      />
                    </TouchableOpacity>
                  </View>
                </SafeAreaView>
              </View>
              <View className="bg-[#A1CCD1] mx-5 mt-10 rounded-xl">
                <View className="flex-row items-center mx-10 justify-between">
                  <View className="flex-col">
                    <Text className="text-white text-lg font-bold">
                      Total Aktivitas Anda
                    </Text>
                    <Text className="text-center text-white font-semibold">
                      {dataActivity.activityItems.length} Data
                    </Text>
                  </View>
                  <Image
                    source={require("../../assets/document.png")}
                    style={{ width: 100, height: 100 }}
                  />
                </View>
              </View>

              <View className="mt-10 mx-5">
                <View className="flex-row justify-center gap-x-2">
                  <TouchableOpacity className="bg-white h-8 w-20 flex-row justify-center border-blue-500 border-2 items-center rounded-xl">
                    <Text>Semua</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="bg-white h-8 w-20 flex-row justify-center border-black border-2 items-center rounded-xl">
                    <Text>Hari Ini</Text>
                  </TouchableOpacity>
                  {/* <TouchableOpacity className="bg-white h-8 w-20 flex-row justify-center border-black border-2 items-center rounded-xl">
              <Text> {"<"} 7 Hari </Text>
            </TouchableOpacity> */}
                  <TouchableOpacity className="bg-white h-8 w-28 gap-x-2 flex-row justify-center border-black border-2 items-center rounded-xl">
                    <Text>Filter</Text>
                    <Ionicons name="filter" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>

              <View className="m-5">
                {dataActivity.activityItems.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    className="flex-row bg-white rounded-xl items-center my-2 p-5"
                    onPress={handlePresentModalPress}
                  >
                    <Image
                      source={require("../../assets/login.png")}
                      style={{ width: 50, height: 50 }}
                      className="rounded-full bg-white mx-1"
                    />
                    <View className="flex-col">
                      <Text className="text-black font-bold">
                        {item.tiketId}
                      </Text>
                      <Text className="text-slate-400">{item.activity}</Text>
                    </View>
                    <Text className="ml-auto">{item.date}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            backdropComponent={(backdropProps) => (
              <BottomSheetBackdrop
                {...backdropProps}
                enableTouchThrough={true}
              />
            )}
            backgroundStyle={{ borderRadius: 30 }}
          >
            <View className="items-center">
              <Text>Awesome 🎉</Text>
            </View>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </>
  );
};

export default ActivityScreen;
