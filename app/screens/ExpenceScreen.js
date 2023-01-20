import { View, Text, ScrollView, Pressable } from "react-native";
import { styles } from "../styles/Expence.design.js";
import React, { useContext } from "react";
import ExpenceList from "../components/ExpenceList.js";
import ExpensePopup from "../components/ExpensePopup.js";
import { cp } from "../Context.js";

const ExpenceScreen = () => {
  const {
    popup: {
      expense: [expensePop, setExpensePop],
    },
  } = useContext(cp);
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.rsHeading}>Rs. 1500.59</Text>
          <Text style={styles.rsSmall}>Total Spendings</Text>
          <View style={styles.rightCon}>
            <Pressable
              onPress={() => {
                setExpensePop(true);
              }}
            >
              <View style={styles.addContainer}>
                <Text style={styles.plus}>+</Text>
              </View>
            </Pressable>
          </View>
        </View>
        <ScrollView style={styles.greenBox}>
          <ExpenceList />
        </ScrollView>
      </View>
      <ExpensePopup />
    </>
  );
};

export default ExpenceScreen;
