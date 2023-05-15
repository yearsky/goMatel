import {
  FlatList,
  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
} from "react-native";
import styles from "../../assets/styles/GlobalStyles";
import {
  Ionicons,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
const ListItems = ({ items, styling }) => {
  var deviceWidth = Dimensions.get("window").width;
  var deviceHeight = Dimensions.get("window").height;
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          //   setSelectedTab(item.tab.id);
          console.log(items.image);
        }}
      >
        <View
          className={styling}
          style={{
            backgroundColor: "white",
            padding: 20,
            marginBottom: 20,
            marginHorizontal: 15,
            height: 250,
            borderRadius: 20,
            width: 200,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 5,
              position: "absolute",
              zIndex: 3,
              right: 25,
              top: 30,
              width: 40,
              height: 40,
              alignItems: "center",
              borderTopRightRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                //   setSelectedTab(item.tab.id);
                console.log(items.id);
              }}
            >
              <MaterialIcons
                name="favorite-outline"
                size={24}
                color="red"
                style={{
                  padding: 2,
                  color: "red",
                }}
              />
            </TouchableOpacity>
          </View>
          <Image
            source={{ uri: items.image }}
            style={{ padding: 20, aspectRatio: 1 }}
          />
          <Text
            style={{
              marginVertical: 10,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {items.name}
          </Text>
          <Text
            style={{
              marginVertical: -10,
              color: "gray",
              fontSize: 14,
            }}
          >
            {"New Arrivals"}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ListItems;
