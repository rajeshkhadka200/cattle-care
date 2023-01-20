import { View, Text, ScrollView } from "react-native";
import { styles } from "../styles/Expence.design.js";
import React, { useContext, useEffect } from "react";
import ExpenceList from "../components/ExpenceList.js";
import MainHeader from "../components/MainHeader.js";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { Context } from "../context/Context.js";
const ExpenceScreen = () => {
  const { user } = useContext(Context);
  console.log(user);
  useEffect(async () => {
    try {
      const res = await axios.get("http://157.245.106.197:5000/api/expence/");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <View style={[{ paddingTop: 30 }]}>
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
          <ScrollView
            contentContainerStyle={{ borderRadius: 30, overflow: "hidden" }}
            style={styles.greenBox}
          >
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
      </View>
    </>
  );
};

export default ExpenceScreen;
