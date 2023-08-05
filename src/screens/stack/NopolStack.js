import NopolScreen from "../NopolScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export const NopolStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: "#F4F2DE" },
      }}
    >
      <Stack.Screen
        name="Nopol"
        options={{
          headerShown: false,
        }}
        component={NopolScreen}
      />
    </Stack.Navigator>
  );
};
