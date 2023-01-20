import { View, Text, ScrollView, Pressable } from "react-native";
import { styles } from "../styles/Expence.design.js";
import React, { useContext, useEffect } from "react";
import ExpenceList from "../components/ExpenceList.js";
import MainHeader from "../components/MainHeader.js";
import { cp } from "../Context.js";
import ExpensePopup from "../components/ExpensePopup.js";

const ExpenceScreen = () => {
  const {
    user,
    popup: {
      expense: [expensePop, setExpensePop],
    },
    expense: [expense, setExpense],
  } = useContext(cp);
  return (
    <>
      <View style={[{ paddingTop: 30 }]}>
        <MainHeader title={"Expenses"} />
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
          <ScrollView
            contentContainerStyle={{ borderRadius: 30, overflow: "hidden" }}
            style={styles.greenBox}
          >
            {expense?.map((dat, index) => {
              return <ExpenceList key={index} data={dat} />;
            })}
            <View style={styles.empty}></View>
          </ScrollView>
        </View>
      </View>
      <ExpensePopup />
    </>
  );
};

export default ExpenceScreen;
