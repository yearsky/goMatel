import HomeScreen from "../HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export const HomeStack = () => {
  return (
    <Stack.Navigator
      // screenOptions={{ contentStyle: { backgroundColor: "aliceblue" } }}
      screenOptions={{
        headerShown: true,
        contentStyle: {
          backgroundColor: "#F4F2DE",
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
          headerStyle: {
            backgroundColor: "#E9B384",
          },
        })}
      />
    </Stack.Navigator>
  );
};
