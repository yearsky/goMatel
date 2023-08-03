import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const GreetingCard = ({ greetingMessage, username }) => {
  var deviceWidth = Dimensions.get("window").width;
  return (
    <View className="bg-[#E9B384] pb-20 flex-row justify-between items-center rounded-b-3xl">
      <View>
        <Text
          style={{
            paddingLeft: deviceWidth * 0.07,
            fontWeight: "500",
            fontFamily: "louis",
          }}
          className="text-black text-left text-[20px]"
        >
          {greetingMessage}
        </Text>
        <Text
          style={{
            paddingLeft: deviceWidth * 0.07,
            fontWeight: "bold",
            fontFamily: "louis",
          }}
          className="text-black text-left text-[20px] pt-2"
        >
          {username}
        </Text>
      </View>
      <TouchableOpacity className="rounded-full p-1 mr-10 bg-black">
        <Ionicons name="notifications" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default GreetingCard;
