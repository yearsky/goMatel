import {
  FontAwesome5,
  Feather,
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default [
  {
    tab: {
      id: "",
      name: "New Arrivals",
      icon: <Ionicons name="grid-sharp" size={18} color="black" />,
    },
  },
  {
    tab: {
      id: "1",
      name: "Hot Products",
      icon: <FontAwesome5 name="fire" size={18} color="red" />,
    },
  },
  {
    tab: {
      id: "2",
      name: "Discount 50%",
      icon: <MaterialCommunityIcons name="brightness-percent" size={18} color="blue" />
    },
  },
];
