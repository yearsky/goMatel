import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HeaderOverviewCard = ({ data }) => {
  return (
    <View className="bg-white mx-7 -mt-10 p-5 border rounded-xl flex-row justify-around items-center">
      <View className="my-2 flex-col items-center gap-y-2 max-w-md">
        <View className="flex-row items-center gap-x-2">
          <Ionicons name="newspaper-outline" size={20} />
          <Text>Data Nopol</Text>
        </View>
        <TouchableOpacity className="bg-blue-400 px-3 py-1 rounded-full">
          <Text className="text-center text-white text-clip">
            {data.activityItems.length} Data
          </Text>
        </TouchableOpacity>
      </View>
      <View className="w-1 rounded-xl h-full bg-black mx-5"></View>
      <View className=" my-2 flex-col items-center gap-y-2">
        <View className="flex-row items-center gap-x-2">
          <Ionicons name="timer-outline" size={20} />
          <Text>Sisa Masa Aktif</Text>
        </View>
        <TouchableOpacity className="bg-yellow-400 px-3 py-1 rounded-full">
          <Text className="text-center text-white text-clip">7 Hari Lagi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderOverviewCard;
