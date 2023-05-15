import {
  Text,
  FlatList,
  View,
  StyleSheet,
  Pressable,
  Image,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import CartListItem from "../components/CartListItem";
import { useSelector } from "react-redux";
import {
  selectDeliveryPrice,
  selectSubtotal,
  selectTotal,
} from "../store/cartSlice";
import styles from "../../assets/styles/GlobalStyles";

const BannerHome = ({ products }) => {
  const { width } = useWindowDimensions();
  var deviceWidth = Dimensions.get("window").width;
  var deviceHeight = Dimensions.get("window").height;

  return (
    <>
      <Text
        style={{
          ...styles.bannerText,
          marginBottom: 0,
          marginLeft: deviceWidth * 0.02,
        }}
      >
        Flash Shale
      </Text>
      <View style={{ padding:20, marginTop: 10,marginBottom:10,backgroundColor: 'powderblue' }}>
        <View
          style={styles.bannerItem}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ ...styles.sloganLeft,textAlign: "left" }}>{products[1].name}</Text>
            <Text style={{ ...styles.sloganLeft,fontSize:18,textAlign: "left" }}>Harga Murah coy</Text>
          </View>
          <View style={{ position: "absolute", right: 0 }}>
            <Image source={{ uri: products[0].image }} style={styles.image} />
          </View>
        </View>
        <View
          style={styles.bannerItem}
        >
          <View style={{ position: "absolute", left: 0 }}>
            <Image source={{ uri: products[1].image }} style={{...styles.image,transform: [{ scaleX: -1 }],}} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ ...styles.sloganRight,textAlign: "right" }}>{products[2].name}</Text>
            <Text style={{ ...styles.sloganRight,fontSize:18,textAlign: "right" }}>Ini jg murah harga na</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default BannerHome;
