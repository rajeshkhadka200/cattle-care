import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";

const DiseaseCard = ({ data, navigation }) => {
  const navigator = useNavigation();
  const redirect = () => {
    console.log(navigation);
    // redirect to diseasedetails page with data
    navigator.navigate("DiseaseDetailsScreen", { id: data.id });
  };
  return (
    <TouchableOpacity onPress={redirect} style={styles.diseaseCard}>
      <View style={styles.left}>
        <Text style={styles.heading}>{data.tittle}</Text>
        <Text style={styles.subHeading}>{data.desc}</Text>
      </View>
      <View style={styles.right}>
        <Image style={styles.image} source={data.image} />
      </View>
    </TouchableOpacity>
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
    height: 170,
    width: "100%",
  },
  subHeading: {
    color: "#828282",
    marginTop: 10,
  },
});
