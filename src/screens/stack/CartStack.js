import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ShoppingCart from "../ShoppingCart";
const Stack = createNativeStackNavigator();

export const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={ShoppingCart} />
    </Stack.Navigator>
  );
};
