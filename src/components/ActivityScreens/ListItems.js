import { useCallback } from "react";
import {
  FlatList,
  Image,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useHookActivity from "../../hook/Activity/HookActivity";

const ListItemsActivity = ({ dataActivity, handlePresentModalPress }) => {
  const { deviceHeight, refreshing, onRefresh } = useHookActivity();
  const renderItem = useCallback(
    ({ item }) => (
      <TouchableOpacity
        key={item.id}
        className="flex-row bg-white rounded-xl items-center my-2 p-3"
        onPress={() => handlePresentModalPress(item)}
      >
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
      </TouchableOpacity>
    ),
    []
  );

  return (
    <View className="mx-5 mt-5">
      {dataActivity.activityItems.length > 0 ? (
        <>
          <View
            style={{
              height: deviceHeight * 0.51,
              paddingBottom: deviceHeight * 0.02,
            }}
          >
            <FlatList
              data={dataActivity.activityItems}
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

export default ListItemsActivity;
