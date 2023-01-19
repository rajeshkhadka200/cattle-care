import { View, Text, TextInput, Pressable } from "react-native";
import LoginInput from "../components/LoginInput";
import { useState } from "react";

import styles from "../styles/LoginScreen.design";

const Login = () => {
  const [values, setValues] = useState({
    phone: "",
    password: "",
  });
  return (
    <View style={styles.container}>
      {/* Header with motto */}
      <View>
        <Text>Cattle Care</Text>
        <Text>Say goodbye to</Text>
        <Text>scattered records & bad health</Text>
      </View>
      {/* Login form */}

      <View style={styles.form}>
        {/* Email input */}
        <LoginInput
          placeholder="98675*****"
          keyboardType="phone-pad"
          onChangeText={(text) => setValues({ ...values, phone: text })}
          value={values.phone}
          label="Phone number"
        />

        {/* Password input */}

        <LoginInput
          placeholder="******"
          keyboardType="default"
          onChangeText={(text) => setValues({ ...values, password: text })}
          value={values.password}
          label="Password"
        />

        {/* Login button */}
        <Pressable onPress={() => console.warn("Login button pressed")}>
          <Text>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
