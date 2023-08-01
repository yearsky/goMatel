import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";

const GlobalAlert = ({ showAlert, handleAlert, message }) => {
  return (
    <AwesomeAlert
      show={showAlert}
      showProgress={false}
      title="Peringatan!"
      message={message}
      closeOnTouchOutside={false}
      closeOnHardwareBackPress={false}
      showCancelButton={true}
      cancelText="Tutup"
      cancelButtonColor="#877dfa"
      onCancelPressed={handleAlert}
    />
  );
};

export default GlobalAlert;
