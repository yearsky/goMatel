import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../ProfileScreen";
const Stack = createNativeStackNavigator();
export const ProfileStack = () => {
  return (
    <Stack.Navigator
      // screenOptions={{ contentStyle: { backgroundColor: "aliceblue" } }}
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "aliceblue",
        },
      }}
    >
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          headerBackTitleVisible: false,
          headerTitle: "",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        })}
      />
    </Stack.Navigator>
  );
};
