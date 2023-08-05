import { Text, View } from "react-native";
import { NumericFormat } from "react-number-format";
const BtmSheetNopolView = ({ props }) => {
  const sisaHutang = props.data.item.sisaHutang;

  return (
    <>
      <Text className="text-xl text-black font-semibold mb-5 mt-2 text-center">
        Detail Data
      </Text>
      <View className="w-full bg-slate-300 h-[2] mb-5"></View>
      <View className="mx-10 mt-5 gap-y-2">
        <View className="flex-row items-center justify-between">
          <Text className="font-semibold text-lg">Nama Leasing</Text>
          <Text>{props.data.item.namaLeasing}</Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="font-semibold text-lg">Cabang Leasing</Text>
          <Text>{props.data.item.cabangLeasing}</Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="font-semibold text-lg">Barang</Text>
          <Text>{props.data.item.barang}</Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="font-semibold text-lg">Nomor Polisi</Text>
          <Text>{props.data.item.plat}</Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="font-semibold text-lg">Model</Text>
          <Text>{props.data.item.model}</Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="font-semibold text-lg">Nama Pemilik</Text>
          <Text>{props.data.item.namaPemilik}</Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="font-semibold text-lg">Nomor Rangka</Text>
          <Text>{props.data.item.nomorRangka}</Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="font-semibold text-lg">Nomor Mesin</Text>
          <Text>{props.data.item.nomorMesin}</Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="font-semibold text-lg">Sisa Hutang</Text>
          <NumericFormat
            value={sisaHutang}
            displayType={"text"}
            thousandSeparator={"."}
            decimalSeparator={","}
            prefix={"Rp "}
            suffix={",00"}
            renderText={(value) => <Text>{value}</Text>}
          />
        </View>
        <View className="flex-col items-start justify-between">
          <Text className="font-semibold text-lg">Note</Text>
          <Text>{props.data.item.Note}</Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="font-semibold text-lg">Status</Text>
          <Text>{props.data.item.status}</Text>
        </View>
      </View>
    </>
  );
};

export default BtmSheetNopolView;
