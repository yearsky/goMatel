import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Feather, Ionicons } from "@expo/vector-icons";
import { CartStack } from "./screens/stack/CartStack";
import { HomeStack } from "./screens/stack/HomeStack";
import { ActivityStack } from "./screens/stack/ActivityStack";
import { useSelector } from "react-redux";
import Login from "./screens/LoginScreen";
import { ProfileStack } from "./screens/stack/ProfileStack";

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
        name="Beranda"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
          tabBarShowLabel: true,
        }}
      ></BottomTab.Screen>

      <BottomTab.Screen
        name="Data Nopol"
        component={CartStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document-text-outline" size={size} color={color} />
          ),
          tabBarShowLabel: true,
        }}
      />
      <BottomTab.Screen
        name="Activity"
        component={ActivityStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="timer-outline" size={size} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      ></BottomTab.Screen>
      <BottomTab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{
          title: "Cart",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Navigation;
