import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import LoginInput from "../components/LoginInput";
import { useState, useContext } from "react";
import axios from "axios";

import { cp } from "../Context.js";

import styles from "../styles/LoginScreen.design.js";

const Login = ({ navigation }) => {
  const [values, setValues] = useState({
    phone: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(cp);

  const handleError = (error) => {
    const message = error.error || error.response.data.error || error.message;
    setError(message);

    setTimeout(() => {
      setError("");
    }, 5000);
  };

  const handleLogin = async () => {
    try {
      setLoading(true);

      const { data } = await axios({
        method: "post",
        url: `http://157.245.106.197:5000/api/user/login`,
        data: {
          phone: values.phone,
          password: values.password,
        },
      });

      // save to context
      setUser({
        id: data.data._id,
        phone: data.data.phone,
      });

      // set user in async storage

      //redirect
      navigation.navigate("HomeScreen");
    } catch (error) {
      handleError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
          secureTextEntry={true}
          label="Password"
        />

        {/* Error text */}
        <Text style={styles.errorText}>{error}</Text>

        {/* Login button */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login </Text>
          {loading && <ActivityIndicator color="white" />}
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secButton]}
          onPress={() => navigation.navigate("RegisterationScreen")}
        >
          <Text style={[styles.buttonText, styles.secButtonText]}>
            Don't have an account ?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
