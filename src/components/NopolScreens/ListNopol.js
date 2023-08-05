import { useCallback } from "react";
import {
  FlatList,
  Image,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useHookNopol from "../../hook/Nopol/useNopolHook";

const ListNopolCard = ({ data, handlePresentModalPress }) => {
  const { deviceHeight, refreshing, onRefresh } = useHookNopol();

  const renderItem = useCallback(
    ({ item }) => (
      <TouchableOpacity
        key={item.id}
        className="flex-col bg-white rounded-xl my-2 p-3"
        onPress={() => handlePresentModalPress(item)}
      >
        <View className="mx-5">
          <Text className="text-black text-lg font-bold">{item.barang}</Text>
          <Text className="text-slate-400 text-xs my-1">{item.date}</Text>
          <View className="flex flex-row my-2 justify-between">
            <View className="flex-col flex items-cente gap-y-2">
              <Text>Plat Nomor</Text>
              <View className="bg-slate-400 px-2 rounded-full">
                <Text className="text-white">{item.plat}</Text>
              </View>
            </View>
            <View className="flex-col flex items-center gap-y-2">
              <Text>Masa Aktif</Text>
              <View
                className={`${
                  item.overDue <= 5 ? "bg-red-400" : "bg-amber-400"
                } px-2 rounded-full`}
              >
                <Text className="text-white">{item.overDue} Hari</Text>
              </View>
            </View>
            <View className="flex-col flex items-center gap-y-2">
              <Text>Status</Text>
              <View className="bg-emerald-400 px-2 rounded-full">
                <Text className="text-white">{item.status}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    ),
    []
  );

  return (
    <View className="mt-5">
      {data.dataNopol.length > 0 ? (
        <>
          <View
            style={{
              height: deviceHeight * 0.51,
              paddingBottom: deviceHeight * 0.02,
            }}
          >
            <FlatList
              data={data.dataNopol}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={renderItem}
              contentContainerStyle={{
                paddingBottom: deviceHeight * 0.05,
              }}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            />
          </View>
        </>
      ) : (
        <>
          <Text>Data Not Found</Text>
        </>
      )}
    </View>
  );
};

export default ListNopolCard;
