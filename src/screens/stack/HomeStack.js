import HomeScreen from "../HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export const HomeStack = () => {
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
        name="Home"
        component={HomeScreen}
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
