import { useState } from "react";

// context
import Context from "./Context.js";

// external libraries
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import HomeScreen from "./screens/HomeScreen";
import HealthScreen from "./screens/HealthScreen";
import ExpenceScreen from "./screens/ExpenceScreen";
import IncomeScreen from "./screens/IncomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterationScreen from "./screens/RegisterationScreen";

export default function App() {
  // creating the custom navigation stack
  const Stack = createNativeStackNavigator();

  // default route
  const [defaultScreen, setDefaultScreen] = useState("LoginScreen");

  return (
    <Context>
      <RegisterationScreen />
    </Context>
  );
}
