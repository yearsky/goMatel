import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from "react-native";
import useHookActivity from "../hook/Activity/HookActivity";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListNopolCard from "../components/NopolScreens/ListNopol";
import useHookNopol from "../hook/Nopol/useNopolHook";
import BtmSheetNopolView from "../components/NopolScreens/btmSheet";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

const NopolScreen = () => {
  const {
    deviceHeight,
    devicewidth,
    bottomSheetModalRef,
    refB,
    snapPoints,
    handleAddModal,
    handlePresentModalPress,
    dataNopol,
  } = useHookNopol();

  return (
    <>
      <GestureHandlerRootView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View>
            <View
              className="bg-[#E9B384] rounded-b-3xl"
              style={{ paddingVertical: deviceHeight * 0.03 }}
            >
              <View style={{ marginTop: deviceHeight * 0.05 }}>
                <View className="flex-row items-center">
                  <TouchableOpacity className="bg-white ml-5 p-2 rounded-full">
                    <Ionicons name="filter" size={20} color="black" />
                  </TouchableOpacity>
                  <View className="flex-1 flex-row items-center bg-gray-100 p-2 rounded-xl px-3 mb-0 mx-5">
                    <TextInput
                      className="flex-1 text-center text-slate-500"
                      placeholder="password"
                      value="Cari Data Disini"
                    />
                    <Ionicons name="search" size={20} color="black" />
                  </View>
                </View>
              </View>
            </View>
            <SafeAreaView>
              <View className="bg-[#A1CCD1] mx-5 rounded-xl">
                <View className="flex-row items-center mx-14 justify-between">
                  <Image
                    source={require("../../assets/hand.png")}
                    style={{ width: 100, height: 100 }}
                  />
                  <View className="flex-col">
                    <Text className="text-white text-lg font-bold">
                      Total Data Anda
                    </Text>
                    <Text className="text-center text-white font-semibold">
                      10 Data
                    </Text>
                  </View>
                </View>
              </View>
              <View className="m-5">
                <View className="flex flex-row justify-between items-center">
                  <Text className="text-xl tracking-wide font-semibold uppercase">
                    List Data
                  </Text>
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => handleAddModal()}
                    className="rounded-full"
                  >
                    <View className="bg-white p-2 rounded-full flex-row items-center">
                      <Ionicons
                        name="ios-add-circle-outline"
                        size={24}
                        color="black"
                      />
                      <Text className="font-semibold">Tambah Data</Text>
                    </View>
                  </TouchableHighlight>
                </View>
                <ListNopolCard
                  data={dataNopol}
                  handlePresentModalPress={handlePresentModalPress}
                />
              </View>
            </SafeAreaView>
          </View>
        </TouchableWithoutFeedback>
        <BottomSheetModalProvider>
          <BottomSheetModal
            ref={refB}
            index={1}
            snapPoints={[200, "80%"]}
            backdropComponent={(backdropProps) => (
              <BottomSheetBackdrop
                {...backdropProps}
                enableTouchThrough={true}
              />
            )}
            $modal={true}
          >
            <Text>Hola!</Text>
          </BottomSheetModal>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={[200, "80%"]}
            backdropComponent={(backdropProps) => (
              <BottomSheetBackdrop
                {...backdropProps}
                enableTouchThrough={true}
              />
            )}
            $modal={true}
          >
            {(props) => {
              return <BtmSheetNopolView props={props} />;
            }}
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </>
  );
};

export default NopolScreen;
