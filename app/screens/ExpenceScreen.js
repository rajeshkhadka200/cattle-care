import { View, Text, ScrollView } from "react-native";
import { styles } from "../styles/Expence.design.js";
import React from "react";
import ExpenceList from "../components/ExpenceList.js";
import MainHeader from "../components/MainHeader.js";
import { SafeAreaView } from "react-native-safe-area-context";

const ExpenceScreen = () => {
  return (
    <>
      <MainHeader title={"Expenses"} />
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.rsHeading}>Rs. 1500.59</Text>
          <Text style={styles.rsSmall}>Total Spendings</Text>
          <View style={styles.rightCon}>
            <View style={styles.addContainer}>
              <Text style={styles.plus}>+</Text>
            </View>
          </View>
        </View>
        <ScrollView style={styles.greenBox}>
          <ExpenceList />
          <ExpenceList />
          <ExpenceList />
          <ExpenceList />
          <ExpenceList />
          <ExpenceList />
          <ExpenceList />
          <ExpenceList />
          <View style={styles.empty}></View>
        </ScrollView>
      </View>
    </>
  );
};

export default ExpenceScreen;
