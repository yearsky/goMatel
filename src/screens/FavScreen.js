import { View, Text, FlatList, Image } from "react-native";
import ListItems from "../components/ListItem";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../assets/styles/GlobalStyles";
import {
  Ionicons,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const FavScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.products);
  return (
    <>
      <View className="flex-1 px-5 py-5">
        <FlatList
          data={products.slice(0, 10)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View className="flex-1 gap-4 p-2">
              <View
                className="h-48 gap-2 rounded-xl p-1 shadow"
                style={{ elevation: 2 }}
              >
                <View>
                  <Image
                    source={{ uri: item.image }}
                    className="aspect-square rounded-lg z-auto"
                  />
                </View>
                <View className="absolute right-5 top-2">
                  <MaterialIcons name="favorite" size={24} color="red" />
                </View>
                <View className="bg-teal-200 absolute p-4 bottom-0 right-7 left-6 rounded-md shadow-sm z-40">
                  <Text className="flex-1 text-center text-xs font-medium text-black">
                    {item.name}
                  </Text>
                </View>
              </View>
            </View>
          )}
          numColumns={2}
          vertical
          contentContainerStyle={{ justifyContent: "center" }}
        />
      </View>
    </>
  );
};

export default FavScreen;
