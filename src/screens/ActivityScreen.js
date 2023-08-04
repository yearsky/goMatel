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
