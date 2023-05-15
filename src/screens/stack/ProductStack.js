import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { APP_NAME } from "@env";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";
import ProductDetailsScreen from "../ProductDetailsScreen";
import ProductsScreen from "../ProductsScreen";
import ShoppingCart from "../ShoppingCart";
import { selectNumberOfItems } from "../../store/cartSlice";

const Stack = createNativeStackNavigator();

export const ProductStack = () => {
  const numberOfItems = useSelector(selectNumberOfItems);
  const appName = { APP_NAME };
  return (
    <Stack.Navigator
      screenOptions={{ contentStyle: { backgroundColor: "white" } }}
    >
      <Stack.Screen
        name="starter-kit"
        component={ProductsScreen}
        options={({ navigation }) => ({
          title: `${appName.APP_NAME}`,
          headerTitleAlign: "center",
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Cart")}
              style={{ flexDirection: "row" }}
            >
              <View
                style={{
                  backgroundColor: "black",
                  position: "relative",
                  borderRadius: 20,
                  alignSelf: "center",
                  height: 20,
                  width: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "900",
                    textAlign: "center",
                    position: "absolute",
                    color: "white",
                    padding: 2,
                    borderRadius: 20,
                  }}
                >
                  {numberOfItems}
                </Text>
              </View>
              <Feather name="shopping-bag" size={24} color="black" />
            </Pressable>
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate("Cart")}
              style={{ flexDirection: "row" }}
            >
              <FontAwesome5 name="search" size={18} color="black" />
            </Pressable>
          ),
          headerShadowVisible: false,
        })}
      />
      <Stack.Screen
        name="Product Details"
        component={ProductDetailsScreen}
        options={({ navigation }) => ({
          headerBackTitleVisible: false,
          headerTitleAlign: "center",
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Cart")}
              style={{ flexDirection: "row" }}
            >
              <View
                style={{
                  backgroundColor: "black",
                  position: "relative",
                  borderRadius: 20,
                  alignSelf: "center",
                  height: 20,
                  width: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "900",
                    textAlign: "center",
                    position: "absolute",
                    color: "white",
                    padding: 2,
                    borderRadius: 20,
                  }}
                >
                  {numberOfItems}
                </Text>
              </View>
              <Feather name="shopping-bag" size={24} color="black" />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen name="Cart" component={ShoppingCart} />
    </Stack.Navigator>
  );
};
