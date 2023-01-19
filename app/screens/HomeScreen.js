import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";
import UpperNav from "../components/UpperNav.js";

// context
import { cp } from "../Context";

//icons
import Cattle from "../assets/svg/cow.svg";
import Health from "../assets/svg/heart.svg";
import Income from "../assets/svg/income.svg";
import Expense from "../assets/svg/expense.svg";
import Steam from "../assets/svg/steam.svg";

// styles
import styles from "../styles/HomeScreen.js";

// navigation controller
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigator = useNavigation();
  const data = useContext(cp);

  const minTemp = "45 °C";
  const maxTemp = "47 °C";

  return (
    <View style={styles.container}>
      {/* upper nav */}
      <UpperNav />

      {/* flower */}
      <View style={styles.flower}>
        <View style={styles.pettleGrp}>
          <View style={styles.pettle}>
            <Pressable
              onPress={() => {
                // console.log("navigating");
                navigator.navigate("CattleScreen");
              }}
            >
              <View style={[styles.thungo, styles.cattle]}>
                <Cattle />
                <Text style={styles.txt}>Cattle</Text>
              </View>
            </Pressable>

            <Pressable
              onPress={() => {
                // console.log("navigating");
                navigator.navigate("HealthScreen");
              }}
            >
              <View style={[styles.thungo, styles.health]}>
                <Health />
                <Text style={styles.txt}>Health</Text>
              </View>
            </Pressable>
          </View>

          <View style={styles.pettle}>
            <Pressable
              onPress={() => {
                // console.log("navigating");
                navigator.navigate("IncomeScreen");
              }}
            >
              <View style={[styles.thungo, styles.income]}>
                <Income />
                <Text style={styles.txt}>Income</Text>
              </View>
            </Pressable>

            <Pressable
              onPress={() => {
                // console.log("navigating");
                navigator.navigate("ExpenceScreen");
              }}
            >
              <View style={[styles.thungo, styles.expense]}>
                <Expense />
                <Text style={styles.txt}>Expense</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.circle}></View>
        </View>
        <View style={styles.steam}>
          <Steam />
        </View>
      </View>

      {/* bottom section */}

      <View style={styles.TempCon}>
        {/* min temperature */}
        <View style={styles.minCon}>
          <Text style={styles.heading}>Min Temp</Text>
          <Text style={styles.temp}>{minTemp}</Text>
        </View>

        {/* max temperature */}
        <View style={styles.maxCon}>
          <Text style={styles.heading}>Max Temp</Text>
          <Text style={styles.temp}>{maxTemp}</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
