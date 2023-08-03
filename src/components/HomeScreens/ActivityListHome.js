import { Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ActivityListHome = ({ data }) => {
  return (
    <View className="mx-5 mt-14 mb-10">
      <View className="flex-row justify-between items-center">
        <Text
          style={{
            fontWeight: "500",
            fontFamily: "louis",
          }}
          className="text-lg"
        >
          Aktivitas Terbaru
        </Text>
        <View className="flex-row items-center gap-1">
          <Text
            style={{
              fontWeight: "500",
            }}
            className="text-md text-blue-500 font-bold"
          >
            Lihat Semua
          </Text>
          <Ionicons
            name="arrow-forward-circle-outline"
            size={20}
            color="#4287f5"
          />
        </View>
      </View>

      <View className="mt-5 bg-white border border-neutral-200 divide-y divide-slate-200 rounded-xl">
        {data.activityItems.slice(0, 5).map((item) => (
          <View key={item.id} className="flex-row my-1 items-center p-2">
            <Image
              source={require("../../../assets/login.png")}
              style={{ width: 50, height: 50 }}
              className="rounded-full bg-white mx-1"
            />
            <View className="flex-col">
              <Text className="text-black font-bold">{item.tiketId}</Text>
              <Text className="text-slate-400">{item.activity}</Text>
            </View>
            <Text className="ml-auto">{item.date}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
export default ActivityListHome;
