import { View, Text, TouchableOpacity } from "react-native";
import LoginInput from "../components/LoginInput";
import { useState, useContext } from "react";
import axios from "axios";

import { cp } from "../Context.js";

import styles from "../styles/LoginScreen.design.js";

const Registration = () => {
  const [values, setValues] = useState({
    farmName: "",
    phone: "",
    password: "",
  });

  const { user, setUser } = useContext(cp);

  console.log(user);

  const handleRegister = async () => {
    try {
      const { data } = await axios({
        method: "post",
        url: `http://157.245.106.197:5000/api/user/register`,
        data: {
          phone: values.phone,
          password: values.password,
          farmName: values.farmName,
        },
      });

      // save to context
      setUser({
        id: data.data._id,
        phone: data.data.phone,
      });

      console.log(data);
    } catch (error) {
      console.log(error);
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
      {/* Registration form */}

      <View style={styles.form}>
        {/* Farm name input */}
        <LoginInput
          placeholder="Rameshoe Farm"
          keyboardType="default"
          onChangeText={(text) => setValues({ ...values, farmName: text })}
          value={values.farmName}
          label="Farm Name"
        />
        {/* Phone input */}
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

        {/* Registration button */}
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secButton]}
          onPress={() => console.warn("Don't have an account ?")}
        >
          <Text style={[styles.buttonText, styles.secButtonText]}>
            Already have an account ?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Registration;
