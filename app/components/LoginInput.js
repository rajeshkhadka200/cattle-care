import React from "react";
import { TextInput, View, Text } from "react-native";

function LoginInput({
  placeholder,
  secureTextEntry,
  keyboardType,
  onChangeText,
  value,
  label,
}) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
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
