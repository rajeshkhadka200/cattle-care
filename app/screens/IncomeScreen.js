import { View, Text } from "react-native";
import React from "react";
import MainHeader from "../components/MainHeader";

import styles from "../styles/IncomeScreen.js";
const IncomeScreen = () => {
  return (
    <View style={[styles.container, { paddingTop: 30 }]}>
      <MainHeader title={"Income"} />
    </View>
  );
};

export default IncomeScreen;
