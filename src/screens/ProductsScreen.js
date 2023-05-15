import { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../assets/styles/GlobalStyles";
import BannerHome from "../components/BannerHome";
import { productsSlice } from "../store/productsSlice";

const ProductsScreen = ({ navigation }) => {
  // const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState("");
  const { width } = useWindowDimensions();
  const products = useSelector((state) => state.products.products);
  const tabs = useSelector((state) => state.tab.tab);

  return (
    <>
      <View>
        <View>
          <FlatList
            style={styles.tabPils}
            data={tabs}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => {
                  setSelectedTab(item.tab.id);
                }}
              >
                <View
                  style={{
                    marginHorizontal: 5,
                  }}
                >
                  <Text
                    style={{
                      ...styles.textPils,
                      borderColor:
                        selectedTab == item.tab.id
                          ? "mediumblue"
                          : styles.textPils.borderColor,
                    }}
                  >
                    {item.tab.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            horizontal
            contentContainerStyle={{ justifyContent: "center" }}
          />
        </View>
      </View>
    </>
  );
};

export default ProductsScreen;
