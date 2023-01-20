import React from "react";

import { TouchableOpacity, Text } from "react-native";
import styles from "../styles/LoginScreen.design";

function LightButton({ handleOnPress, text }) {
  return (
    <TouchableOpacity
      style={[styles.button, styles.secButton]}
      onPress={handleOnPress}
    >
      <Text style={[styles.buttonText, styles.secButtonText]}>{text}</Text>
    </TouchableOpacity>
  );
}

export default LightButton;
