import { View, Text } from "react-native";
import React, { useContext } from "react";

// context
import { cp } from "../Context";

const HomeScreen = () => {
  const data = useContext(cp);
  console.log(data);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
