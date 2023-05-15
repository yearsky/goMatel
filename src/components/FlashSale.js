import CountDown from "react-native-countdown-component";
import {
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;
const FlashSale = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <>
      <View
        style={{
          backgroundColor: "white",
          marginTop: 20,
          height: "40%",
        }}
      >
        <View
          style={{
            padding: 20,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              zIndex: 1,
              fontFamily: "louis",
              fontSize: 30,
              color: "black",
            }}
          >
            Flash Sale
          </Text>
          <CountDown
            until={60 * 30}
            onFinish={() => alert("finished")}
            onPress={() => alert("hello")}
            size={18}
          />
        </View>

        <FlatList
          style={{
            marginLeft: -30,
            padding: 20,
            marginTop: deviceHeight * 0,
            marginBottom: deviceHeight * 0.02,
          }}
          data={products.slice(0, 4)}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                //   setSelectedTab(item.tab.id);
                console.log(item.image);
              }}
            >
              <View
                style={{
                  backgroundColor: "paleturquoise",
                  padding: 20,
                  marginHorizontal: 25,
                  height: "100%",
                  borderRadius: 20,
                  zIndex: 1,
                  width: 250,
                }}
              >
                <View
                  style={{
                    backgroundColor: "darkorange",
                    padding: 5,
                    position: "absolute",
                    zIndex: 3,
                    right: 20,
                    top: 20,
                    width: 50,
                    height: 50,
                    alignItems: "center",
                    borderBottomRightRadius: 50,
                    borderBottomLeftRadius: 50,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 14,
                    }}
                  >
                    20% {"\n"}OFF
                  </Text>
                </View>
                <Image
                  source={{ uri: item.image }}
                  style={{ padding: 20, aspectRatio: 1.5 }}
                />
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {item.name}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingBottom: 10,
                    marginBottom: 20,
                    borderRadius: 20,
                    paddingTop: 5,
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "gray",
                      paddingRight: 15,
                      fontSize: 20,
                      textDecorationLine: "line-through",
                    }}
                  >
                    ${item.price}
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "red",
                      fontWeight: "600",
                      fontSize: 20,
                    }}
                  >
                    $150
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          horizontal
        />
      </View>
    </>
  );
};

export default FlashSale;
