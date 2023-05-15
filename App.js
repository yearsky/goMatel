import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import Navigation from "./src/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { Provider } from "react-redux";
import * as SplashScreen from "expo-splash-screen";
import { store } from "./src/store";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

SplashScreen.preventAutoHideAsync();

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
    return <Text>Error</Text>;
  }

  return (
    <Provider store={store}>
      <Navigation />

      <StatusBar style="auto" />
    </Provider>
  );
}
