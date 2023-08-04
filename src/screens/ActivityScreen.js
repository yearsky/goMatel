import { Ionicons } from "@expo/vector-icons";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import ListItemsActivity from "../components/ActivityScreens/ListItems";
import useHookActivity from "../hook/Activity/HookActivity";

const ActivityScreen = ({ navigation }) => {
  const {
    deviceHeight,
    devicewidth,
    selectedActivity,
    bottomSheetModalRef,
    snapPoints,
    handlePresentModalPress,
    dataActivity,
  } = useHookActivity();

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

            <View className="mt-10">
              <View className="flex-row justify-center gap-x-2">
                <TouchableOpacity className="bg-white h-8 w-20 flex-row justify-center border-blue-500 border-2 items-center rounded-xl">
                  <Text>Semua</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-white h-8 w-20 flex-row justify-center border-black border-2 items-center rounded-xl">
                  <Text>Hari Ini</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-white h-8 w-28 gap-x-2 flex-row justify-center border-black border-2 items-center rounded-xl">
                  <Text>Filter</Text>
                  <Ionicons name="filter" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity className="bg-white h-8 w-8 flex-row justify-center border-black border-2 items-center rounded-xl">
                  <Ionicons name="search" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <ListItemsActivity
              dataActivity={dataActivity}
              handlePresentModalPress={handlePresentModalPress}
            />
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
            $modal={true}
          >
            <View className="mx-10 my-5">
              <Text className="text-xl text-black font-semibold mb-5">
                Detail Aktivitas
              </Text>
              <View className="flex-row my-2 justify-between items-center">
                <Text className="text-lg text-slate-400">Tracking Id</Text>
                <View className="bg-black rounded-xl">
                  <Text className="text-md text-white p-2">
                    {selectedActivity?.tiketId}
                  </Text>
                </View>
              </View>
              <View className="w-full my-2 rounded-full opacity-50 h-[2] bg-slate-300" />

              <View className="flex-row my-2 justify-between items-center">
                <Text className="text-lg text-slate-400">Tanggal</Text>
                <View className="bg-red-400 rounded-2xl flex-row items-center p-2">
                  <Ionicons name="calendar-outline" size={20} color="white" />
                  <Text className="text-md text-white">
                    {selectedActivity?.date}
                  </Text>
                </View>
              </View>
              <View className="w-full my-2 rounded-full opacity-50 h-[2] bg-slate-300" />
              <View className="flex-row my-2 justify-between items-center">
                <Text className="text-lg text-slate-400">Aktivitas</Text>
                <View className="rounded-2xl p-2 bg-[#69bfc9]">
                  <Text className="text-md  text-white">
                    {selectedActivity?.activity}
                  </Text>
                </View>
              </View>
            </View>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </>
  );
};

export default ActivityScreen;
