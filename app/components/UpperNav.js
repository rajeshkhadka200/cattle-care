import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

//icons
import Menu from "../assets/svg/menu.svg";
import Notification from "../assets/svg/notification.svg";

const UpperNav = () => {
  return (
    <View style={styles.container}>
      <Menu />
      <Notification />
    </View>
  );
};

export default UpperNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});
