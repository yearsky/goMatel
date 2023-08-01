import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Feather, Ionicons } from "@expo/vector-icons";
import { CartStack } from "./screens/stack/CartStack";
import { HomeStack } from "./screens/stack/HomeStack";
import { ProductStack } from "./screens/stack/ProductStack";
import { useSelector } from "react-redux";
import Login from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const Navigation = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      ></BottomTab.Screen>
      <BottomTab.Screen
        name="Store"
        component={ProductStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" size={size} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      ></BottomTab.Screen>

      <BottomTab.Screen
        name="CartTab"
        component={CartStack}
        options={{
          title: "Cart",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-bag" size={size} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Navigation;
