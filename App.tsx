import React from "react";
import { Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Home } from "./src/screens/index";

const App = () => {
  return <GestureHandlerRootView style={{ flex: 1 }}>
    <Home />
  </GestureHandlerRootView>;
}

export default App