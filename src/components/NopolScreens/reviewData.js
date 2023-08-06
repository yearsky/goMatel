import { Text, View } from "react-native";
import { NumericFormat } from "react-number-format";
const ReviewDataNopol = ({ formValues }) => {
  const sisaHutang = formValues.sisaHutang;

  return (
    <>
      <View className="mx-10 mt-5 gap-y-2">
        <View className="flex-row items-center justify-between my-1">
          <Text className="font-semibold text-md">Nama Leasing</Text>
          <Text>{formValues.namaLeasing}</Text>
        </View>
        <View className="flex-row items-center justify-between my-2">
          <Text className="font-semibold text-md">Cabang Leasing</Text>
          <Text>{formValues.cabangLeasing}</Text>
        </View>
        <View className="flex-row items-center justify-between my-2">
          <Text className="font-semibold text-md">Barang</Text>
          <Text>{formValues.barang}</Text>
        </View>
        <View className="flex-row items-center justify-between my-2">
          <Text className="font-semibold text-md">Nomor Polisi</Text>
          <Text>{formValues.plat}</Text>
        </View>
        <View className="flex-row items-center justify-between my-2">
          <Text className="font-semibold text-md">Model</Text>
          <Text>{formValues.model}</Text>
        </View>
        <View className="flex-row items-center justify-between my-2">
          <Text className="font-semibold text-md">Nama Pemilik</Text>
          <Text>{formValues.namaPemilik}</Text>
        </View>
        <View className="flex-row items-center justify-between my-2">
          <Text className="font-semibold text-md">Nomor Rangka</Text>
          <Text>{formValues.nomorRangka}</Text>
        </View>
        <View className="flex-row items-center justify-between my-2">
          <Text className="font-semibold text-md">Nomor Mesin</Text>
          <Text>{formValues.nomorMesin}</Text>
        </View>
        <View className="flex-row items-center justify-between my-2">
          <Text className="font-semibold text-md">Sisa Hutang</Text>
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
        <View className="flex-col items-start justify-between my-2">
          <Text className="font-semibold text-md">Note</Text>
          <Text>{formValues.note}</Text>
        </View>
        <View className="flex-row items-center justify-between my-2">
          <Text className="font-semibold text-md">Status</Text>
          <Text>{formValues.status}</Text>
        </View>
      </View>
    </>
  );
};

export default ReviewDataNopol;
