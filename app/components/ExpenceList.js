import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React, { useEffect } from "react";
import axios from "axios";
const ExpenceList = () => {
  return (
    <>
      <View style={styles.whiteBox}>
        <View style={styles.col1}>
          <Text style={styles.tittle}>Marvin McKinney</Text>
          <Text style={styles.smallDate}>8/2/19</Text>
        </View>

        <View style={styles.second_con}>
          <View style={styles.col2}>
            <Image
              style={styles.image}
              source={require("../assets/cattles/calf_gante.jpg")}
            />
            <Text>Aashish</Text>
          </View>
        </View>
        <View style={styles.col3}>
          <Text style={styles.rate}>300 /-</Text>
        </View>
      </View>
    </>
  );
};

export default ExpenceList;

const styles = StyleSheet.create({
  col1: {
    flex: 1,
  },
  whiteBox: {
    borderRadius: 10,
    width: "90%",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    display: "flex",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  tittle: {
    fontSize: 20,
  },
  smallDate: {
    fontSize: 12,
    color: "#898989",
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 100,
    alignSelf: "center",
  },
  col2: {
    display: "flex",
    width: "100%",
  },
  rate: {
    marginLeft: 10,
    fontSize: 20,
  },
});
