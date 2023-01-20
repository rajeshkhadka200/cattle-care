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
  } = useContext(cp);

  const expenceData = [
    {
      name: "Weat",
      price: 1800,
      date: "12/12/2020",
    },
    {
      name: "Maize",
      price: 2500,
      date: "12/2/2020",
    },
    {
      name: "Vaccine",
      price: 1950,
      date: "2/12/2020",
    },
    {
      name: "Grass",
      price: 2900,
      date: "2/06/2020",
    },
  ];
  return (
    <>
      <View style={[{ paddingTop: 30 }]}>
        <MainHeader title={"Expenses"} />
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <Text style={styles.rsHeading}>Rs. 9150</Text>
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
            {expenceData.map((item, i) => {
              console.log(item.name);
              return <ExpenceList key={i} data={item} />;
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
