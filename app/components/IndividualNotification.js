import { Dimensions, Image, StyleSheet } from "react-native";
import { View, Text } from "react-native";
import React from "react";

//icons
import NotifHeart from "../assets/svg/notificationRound.svg";
import Rupee from "../assets/svg/rupee.svg";
import FoodIco from "../assets/svg/food.svg";

const IndividualNotification = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        {data.type === "health" && <NotifHeart />}
        {data.type === "finance" && <Rupee />}
        {data.type === "food" && (
          <View
            style={{
              height: 56,
              width: 56,
              backgroundColor: "#F1FEFA",
              borderRadius: 26,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../assets/cattles/food.png")} />
          </View>
        )}
      </View>

      <View style={styles.Content}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.description}</Text>
      </View>
    </View>
  );
};

export default IndividualNotification;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 28,
    backgroundColor: "white",
    marginTop: 10,
    borderRadius: 30,
  },
  Content: {
    marginLeft: 18,
  },
  desc: {
    width: Dimensions.get("window").width - 130,
    marginTop: 5,
    color: "#8D8D8D",
  },
  title: {
    color: "#000000",
    fontWeight: "500",
  },
});
