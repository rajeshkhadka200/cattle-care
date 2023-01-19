import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const DiseaseCard = ({ data }) => {
  console.log(data.image);
  return (
    <View style={styles.diseaseCard}>
      <View style={styles.left}>
        <Text style={styles.heading}>{data.tittle}</Text>
        <Text style={styles.subHeading}>{data.desc}</Text>
      </View>
      <View style={styles.right}>
        <Image style={styles.image} source={data.image} />
      </View>
    </View>
  );
};

export default DiseaseCard;

// create style
const styles = StyleSheet.create({
  diseaseCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingLeft: 20,
    borderWidth: 0.5,
    borderColor: "#D1D1D1",
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
    overflow: "hidden",
  },
  left: {
    width: 200,
    paddingVertical: 10,
  },
  right: {
    marginLeft: 5,
    flex: 1,
    position: "relative",
    width: "30%",
  },
  heading: {
    fontSize: 20,
  },
  image: {
    height: 200,
    width: "100%",
  },
  subHeading: {
    color: "#828282",
    marginTop: 10,
  },
});
