import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

//icons
import Menu from "../assets/svg/menu.svg";
import Notification from "../assets/svg/notification.svg";
import Gear from "../assets/svg/gear.svg";
const UpperNav = () => {
  return (
    <View style={styles.container}>
      <Menu />
      <View style={styles.sideCon}>
        <Gear />
        <View style={{ marginLeft: 15 }}>
          <Notification />
        </View>
      </View>
    </View>
  );
};

export default UpperNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "space-between",
  },
  sideCon: {
    flexDirection: "row",
  },
});
