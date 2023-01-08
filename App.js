import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </SafeAreaProvider>
  );
}
