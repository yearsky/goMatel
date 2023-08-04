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
  RefreshControl,
  Dimensions,
  useWindowDimensions,
  TouchableWithoutFeedback,
  TextInput,
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
import { activitySlice } from "../store/activitySlice";

const ActivityScreen = ({ navigation }) => {
  // const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState("");
  const [isVisible, setVisible] = useState(false);
  const { width } = useWindowDimensions();
  const [refreshing, setRefreshing] = useState(false);
  const dataActivity = useSelector((state) => state.activityItems);

  const selectedActivity = useSelector(
    (state) => state.activityItems.selectedActivity
  );
  const tabs = useSelector((state) => state.tab.tab);

  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["15%", "50%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(async (item) => {
    dispatch(activitySlice.actions.setSelectedActivity(item.id));
    await bottomSheetModalRef.current?.present({ selectedActivity });
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const renderItem = useCallback(
    ({ item }) => (
      <TouchableOpacity
        key={item.id}
        className="flex-row bg-white rounded-xl items-center my-2 p-3"
        onPress={() => handlePresentModalPress(item)}
      >
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
      </TouchableOpacity>
    ),
    []
  );

  return (
    <>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <View>
            <View className="pb-0 bg-[#E9B384] rounded-b-3xl">
              <SafeAreaView>
                <View className="m-5 flex-col items-center justify-center">
                  <Text className="text-white text-2xl font-bold">
                    Aktivitas Anda
                  </Text>
                </View>
              </SafeAreaView>
            </View>
            <View className="bg-[#A1CCD1] mx-5 mt-5 rounded-xl">
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
                <TouchableOpacity className="bg-white h-8 w-28 gap-x-2 flex-row justify-center border-black border-2 items-center rounded-xl">
                  <Text>Filter</Text>
                  <Ionicons name="filter" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity className="bg-white h-8 w-8 flex-row justify-center border-black border-2 items-center rounded-xl">
                  <Ionicons name="search" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <View className="mx-5 mt-5">
              <View
                style={{
                  height: Dimensions.get("window").height * 0.5,
                  paddingBottom: Dimensions.get("window").height * 0.02,
                }}
              >
                <FlatList
                  data={dataActivity.activityItems}
                  keyExtractor={(item) => item.id.toString()}
                  showsVerticalScrollIndicator={false}
                  renderItem={renderItem}
                  contentContainerStyle={{
                    paddingBottom: Dimensions.get("window").height * 0.05,
                  }}
                  refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }
                />
              </View>
            </View>
          </View>
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
            $modal={true}
          >
            <View className="items-center">
              <Text>{selectedActivity?.tiketId}</Text>
            </View>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </>
  );
};

export default ActivityScreen;
