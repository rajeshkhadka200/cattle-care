import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React, { useEffect } from "react";

const ExpenceList = ({ data }) => {
  console.log(data.price);
  return (
    <>
      <View style={styles.whiteBox}>
        <View style={styles.col1}>
          <Text style={styles.tittle}>{data?.name}</Text>
          <Text style={styles.smallDate}>{data?.date}</Text>
        </View>

        <View style={styles.second_con}>
          <View style={styles.col2}></View>
        </View>
        <View style={styles.col3}>
          <Text style={styles.rate}>{data?.price} /-</Text>
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
    paddingVertical: 15,
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
