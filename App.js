import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import Navigation from "./src/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { Provider } from "react-redux";
import * as SplashScreen from "expo-splash-screen";
import { store, persistor } from "./src/store";
import { PersistGate } from "redux-persist/integration/react";
import * as Font from "expo-font";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          "the-natures": require("./assets/thenatures.ttf"),
          louis: require("./assets/Louis.ttf"),
        });
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  const toastConfig = {
    success: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: "green" }}
        text1Style={{
          fontSize: 15,
          fontWeight: "400",
        }}
        text2Style={{ fontSize: 15, color: "black" }}
      />
    ),
    error: (props) => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: 17,
        }}
        text2Style={{
          fontSize: 15,
        }}
      />
    ),
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
        <StatusBar style="auto" />
        <Toast config={toastConfig} />
      </PersistGate>
    </Provider>
  );
}
