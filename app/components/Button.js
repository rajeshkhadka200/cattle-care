import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import styles from "../styles/LoginScreen.design";

function Button({ handleLogin, loading, text }) {
  return (
    <TouchableOpacity style={styles.button} onPress={handleLogin}>
      <Text style={styles.buttonText}>{text} </Text>
      {loading && <ActivityIndicator color="white" />}
    </TouchableOpacity>
  );
}

export default Button;
