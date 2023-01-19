import { View, Text, TextInput, Pressable } from "react-native";

const Login = () => {
  return (
    <View>
      {/* Header with motto */}
      <View>
        <Text>Cattle Care</Text>
        <Text>Say goodbye to</Text>
        <Text>scattered records & bad health</Text>
      </View>
      {/* Login form */}

      <View>
        {/* Email input */}

        <TextInput placeholder="Phone number" keyboardType="phone-pad" />

        {/* Password input */}
        <TextInput placeholder="Password" secureTextEntry={true} />

        {/* Login button */}
        <Pressable onPress={() => console.warn("Login button pressed")}>
          <Text>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
