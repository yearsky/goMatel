import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  TextInput,
  Button,
  SafeAreaView,
  Image,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../store/authSlice";
import Alert from "../components/Alert";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleLogin = async () => {
    if (username === "" || password === "") {
      setAlert(true);
      setAlertMessage("Username dan Password tidak boleh kosong");
      return; // Menghentikan eksekusi fungsi handleLogin, tetapi tidak perlu return false;
    }

    const isAuthenticated = username === "yearsky" && password === "123";

    setLoading(true); // Set loading state to true when login starts

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false); // Set loading state to false when login finishes

    if (isAuthenticated) {
      dispatch(setAuthenticated({ isAuthenticated, username }));
    } else {
      setAlert(true);
      setAlertMessage("Kredensial tidak dapat ditemukan");
    }
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleAlert = () => {
    setAlert(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="flex-1 bg-white" style={{ backgroundColor: "#877dfa" }}>
        <SafeAreaView className="flex ">
          <View className="flex-row justify-center mt-10 mb-10">
            <Image
              source={require("../../assets/login.png")}
              style={{ width: 300, height: 300 }}
            />
          </View>
        </SafeAreaView>
        <Alert
          showAlert={showAlert}
          message={alertMessage}
          handleAlert={handleAlert}
        />
        <View
          style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
          className="flex-1 bg-white px-8 pt-8"
        >
          <View className="space-y-3">
            <Text className="text-gray-700 ml-4">Username</Text>
            <TextInput
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              placeholder="username"
              value={username}
              onChangeText={setUsername}
            />
            <Text className="text-gray-700 ml-4">Password</Text>
            <View className="flex flex-row items-center bg-gray-100 p-2 rounded-xl px-3 mb-5">
              <TextInput
                className="flex-1"
                secureTextEntry={!showPassword}
                placeholder="password"
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={handleTogglePassword} className="p-2">
                <Ionicons
                  name={showPassword ? "eye" : "eye-off-sharp"}
                  size={20}
                  color="#666"
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={handleLogin}
              disabled={loading}
              className="py-3 bg-yellow-400 rounded-xl"
            >
              {loading ? (
                <ActivityIndicator size="small" color="#ffffff" />
              ) : (
                <Text
                  className="text-xl font-bold text-center text-white"
                  style={{ fontWeight: "bold" }}
                >
                  Login
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
