import { View, Text } from "react-native";
import React, { useContext } from "react";
import UpperNav from "../components/UpperNav.js";

// context
import { cp } from "../Context";

import styles from "../styles/HomeScreen.js";
const HomeScreen = () => {
  const data = useContext(cp);
  return (

    
    <View style={styles.container}>
      {/* upper nav */}
      <UpperNav />
    </View>
  );
};

export default HomeScreen;
