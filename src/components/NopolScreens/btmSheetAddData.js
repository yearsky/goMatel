import {
  Animated,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import useAddHook from "../../hook/Nopol/useAddHook";
import InputComponent from "./InputComponent";
import ReviewDataNopol from "./reviewData";

const BtmSheetAddData = () => {
  const {
    currentViewIndex,
    widthAnimation,
    handleNextButton,
    handlePreviousButton,
    formValues,
    setFormValues,
    handleInputChange,
    items,
    value,
    open,
    setValue,
    setOpen,
    setItems,
  } = useAddHook();

  const renderView = () => {
    switch (currentViewIndex) {
      case 0:
        return (
          <>
            <View className="mx-10 mt-5 gap-y-2">
              <View className="gap-y-1">
                <Text>Nama Leasing</Text>
                <InputComponent
                  name="namaLeasing"
                  value={formValues.namaLeasing}
                  handleInputChange={handleInputChange}
                />
              </View>
              <View className="gap-y-1">
                <Text>Cabang Leasing</Text>
                <InputComponent
                  name="cabangLeasing"
                  value={formValues.cabangLeasing}
                  handleInputChange={handleInputChange}
                />
              </View>
              <View className="gap-y-1">
                <Text>Barang</Text>
                <InputComponent
                  name="barang"
                  value={formValues.barang}
                  handleInputChange={handleInputChange}
                />
              </View>
              <View className="gap-y-1">
                <Text>Nopol</Text>
                <InputComponent
                  name="plat"
                  value={formValues.plat}
                  handleInputChange={handleInputChange}
                />
              </View>
              <View className="gap-y-1">
                <Text>Model</Text>
                <InputComponent
                  name="model"
                  value={formValues.model}
                  handleInputChange={handleInputChange}
                />
              </View>
            </View>
          </>
        );
      case 1:
        return (
          <>
            <View className="mx-10 mt-5 gap-y-2">
              <View className="gap-y-1">
                <Text>Nama Pemilik</Text>
                <InputComponent
                  name="namaPemilik"
                  value={formValues.namaPemilik}
                  handleInputChange={handleInputChange}
                />
              </View>
              <View className="gap-y-1">
                <Text>Nomor Rangka</Text>
                <InputComponent
                  name="nomorRangka"
                  value={formValues.nomorRangka}
                  handleInputChange={handleInputChange}
                />
              </View>
              <View className="gap-y-1">
                <Text>Nomor Mesin</Text>
                <InputComponent
                  name="nomorMesin"
                  value={formValues.nomorMesin}
                  handleInputChange={handleInputChange}
                />
              </View>
              <View className="gap-y-1">
                <Text>Sisa Hutang</Text>
                <InputComponent
                  name="sisaHutang"
                  value={formValues.sisaHutang}
                  handleInputChange={handleInputChange}
                />
              </View>
              <View className="gap-y-1">
                <Text>Masa Aktif</Text>
                <InputComponent
                  name="overDue"
                  value={formValues.overDue}
                  handleInputChange={handleInputChange}
                />
              </View>
            </View>
          </>
        );
      case 2:
        return (
          <>
            <View className="mx-10 mt-5 gap-y-2">
              <View className="gap-y-1">
                <Text>Catatan</Text>
                <InputComponent
                  name="note"
                  value={formValues.note}
                  handleInputChange={handleInputChange}
                />
              </View>
              <View className="gap-y-1">
                <Text>Status</Text>
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  placeholder="Pilih Status"
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                />
              </View>
            </View>
          </>
        );
      case 3:
        return (
          <>
            <ReviewDataNopol formValues={formValues} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View>
          <Text className="text-xl text-black font-semibold mb-5 mt-2 text-center">
            {currentViewIndex === 3 ? "Review Data" : "Tambah Data"}
          </Text>
          <Animated.View
            style={{
              width: widthAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: ["0%", "100%"],
              }),
              backgroundColor: "slategray",
              height: 2,
              marginBottom: 5,
            }}
          ></Animated.View>
          <ScrollView>
            {renderView()}
            <View
              className={`flex flex-row items-center justify-center gap-x-2 ${
                open ? "mt-20" : "mt-0"
              }`}
            >
              {currentViewIndex !== 0 && (
                <View className="my-4">
                  <TouchableHighlight
                    onPress={handlePreviousButton}
                    className="rounded-xl"
                  >
                    <View className="bg-yellow-400 p-3 rounded-xl">
                      <Text className="text-white">Sebelumnya</Text>
                    </View>
                  </TouchableHighlight>
                </View>
              )}
              {currentViewIndex <= 3 && (
                <View className="my-4">
                  <TouchableHighlight
                    onPress={handleNextButton}
                    className="rounded-xl"
                  >
                    <View className="bg-blue-400 p-3 rounded-xl">
                      <Text className="text-white">
                        {currentViewIndex === 3 ? "Kirim Data" : "Selanjutnyaa"}
                      </Text>
                    </View>
                  </TouchableHighlight>
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default BtmSheetAddData;
