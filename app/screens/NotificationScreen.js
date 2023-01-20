import { View, Text } from "react-native";
import React from "react";

// styles

import styles from "../styles/NotificationScreen.js";

// components
import MainHeader from "../components/MainHeader.js";
import IndividualNotification from "../components/IndividualNotification.js";
const Notifications = [
  {
    title: "Vaccine Notification.",
    description: "It’s time to give basanti a another dose of FMD vaccine",
    type: "health",
  },
  {
    title: "Expense tracking.",
    description: "It’s time to add today's milk sells.",
    type: "finance",
  },
  {
    title: "Food suggestion",
    description: "basanti is on special diet due to FMD vaccine.",
    type: "food",
  },
];

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader title={"Notification"} notification />
      {Notifications.map((data, index) => {
        return <IndividualNotification data={data} key={index} />;
      })}
    </View>
  );
};

export default NotificationScreen;
