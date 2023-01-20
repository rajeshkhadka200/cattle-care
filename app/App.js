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
import DiseaseDetailsScreen from "./screens/DiseaseDetailsScreen.js";
import CattlesScreen from "./screens/CattlesScreen.js";
import CattleDetailScreen from "./screens/CattleDetails.js";

export default function App() {
  // creating the custom navigation stack
  const Stack = createNativeStackNavigator();

  // default route
  const [defaultScreen, setDefaultScreen] = useState("HomeScreen");

  return (
    <Context>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={defaultScreen}>
          {/* home screen */}
          <Stack.Screen
            component={HomeScreen}
            name="HomeScreen"
            options={{
              headerShown: false,
              animation: "slide_from_right",
            }}
          />

          {/* health screen */}
          <Stack.Screen
            component={HealthScreen}
            name="HealthScreen"
            options={{
              headerShown: false,
              animation: "slide_from_right",
            }}
          />

          {/* Expence screen */}
          <Stack.Screen
            component={ExpenceScreen}
            name="ExpenceScreen"
            options={{
              headerShown: false,
              animation: "slide_from_right",
            }}
          />

          {/* Income screen */}
          <Stack.Screen
            component={IncomeScreen}
            name="IncomeScreen"
            options={{
              headerShown: false,
              animation: "slide_from_right",
            }}
          />

          {/* Login screen */}
          <Stack.Screen
            component={LoginScreen}
            name="LoginScreen"
            options={{
              headerShown: false,
              animation: "zoom_in",
            }}
          />

          {/* Registeration screen */}
          <Stack.Screen
            component={RegisterationScreen}
            name="RegisterationScreen"
            options={{
              headerShown: false,
              animation: "slide_from_left",
            }}
          />

          <Stack.Screen
            component={HealthScreen}
            name="Health"
            options={{
              headerShown: false,
              animation: "slide_from_right",
            }}
          />
          <Stack.Screen
            component={DiseaseDetailsScreen}
            name="DiseaseDetailsScreen"
            options={{
              headerShown: false,
              animation: "slide_from_right",
            }}
          />

          {/* Cattles screen */}
          <Stack.Screen
            component={CattlesScreen}
            name="CattleScreen"
            options={{
              headerShown: false,
              animation: "none",
            }}
          />

          {/* Cattles detail screen */}
          <Stack.Screen
            component={CattleDetailScreen}
            name="CattleDetailScreen"
            options={{
              headerShown: false,
              animation: "none",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Context>
  );
}
