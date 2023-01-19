import { View, Text, Pressable } from "react-native";
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
      <View style={styles.titleContainer}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Cattle </Text>
          <Text style={[styles.titleText, styles.titleTextSec]}>Care</Text>
        </View>
        <Text style={styles.detailText}>Say goodbye to</Text>
        <Text style={styles.detailText}>scattered records & bad health</Text>
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
        <Pressable
          style={styles.button}
          onPress={() => console.warn("Login button pressed")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.secButton]}
          onPress={() => console.warn("Login button pressed")}
        >
          <Text style={[styles.buttonText, styles.secButtonText]}>
            Don't have an account ?
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
