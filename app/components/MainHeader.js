import { View, Text, Pressable } from "react-native";
import React from "react";

import { StyleSheet } from "react-native";

// icons
import Back from "../assets/svg/goBack.svg";
import Notification from "../assets/svg/notification.svg";
import { useNavigation } from "@react-navigation/native";

const MainHeader = ({ title, notification = false }) => {
  const navigator = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.backBtn}>
        <Pressable
          onPress={() => {
            navigator.goBack();
          }}
        >
          <Back />
        </Pressable>
      </View>

      <Text
        style={[
          styles.title,
          notification
            ? {
                marginLeft: 50,
              }
            : {},
        ]}
      >
        {title}
      </Text>

      {notification ? (
        ""
      ) : (
        <View style={[styles.notification]}>
          <Pressable
            onPress={() => {
              console.log("Travelling to notif");
              navigator.navigate("NotificationScreen");
            }}
          >
            <Notification />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  container: {
    height: 90,
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 30,
    alignItems: "center",
  },
  notification: {
    marginLeft: "auto",
  },
  title: {
    marginLeft: "auto",
    fontWeight: "500",
    fontSize: 16,
    color: "#607089",
  },
});
