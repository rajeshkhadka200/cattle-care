import { View, Text } from "react-native";
import React, { useContext } from "react";
import UpperNav from "../components/UpperNav.js";

// context
import { cp } from "../Context";

//icons
import Cattle from "../assets/svg/cow.svg";
import Health from "../assets/svg/heart.svg";
import Income from "../assets/svg/income.svg";
import Expense from "../assets/svg/expense.svg";

// styles
import styles from "../styles/HomeScreen.js";

const HomeScreen = () => {
  const data = useContext(cp);

  const minTemp = "45 °C";
  const maxTemp = "47 °C";

  return (
    <View style={styles.container}>
      {/* upper nav */}
      <UpperNav />

      {/* flower */}
      <View style={styles.flower}>
        <View style={styles.pettle}>
          <View style={styles.cattle}>
            <Cattle />
            <Text style={styles.txt}>Cattle</Text>
          </View>

          <View style={styles.health}>
            <Health />
            <Text style={styles.txt}>Health</Text>
          </View>

          <View style={styles.income}>
            <Income />
            <Text style={styles.txt}>Income</Text>
          </View>

          <View style={styles.expense}>
            <Expense />
            <Text style={styles.txt}>Expense</Text>
          </View>
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
