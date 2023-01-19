import React from "react";
import { TextInput, View, Text } from "react-native";
import styles from "../styles/LoginScreen.design";

function LoginInput({
  placeholder,
  secureTextEntry,
  keyboardType,
  onChangeText,
  value,
  label,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}

export default LoginInput;
