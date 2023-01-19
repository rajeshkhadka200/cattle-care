import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  // creating the custom navigation stack
  const Stack = createNativeStackNavigator();

  // default route
  const [defaultScreen, setDefaultScreen] = useState("HomeScreen");

  return (
    <View style={styles.container}>
      <Text>Open up App.js to haifdf tah start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
