import { Dimensions, StyleSheet } from "react-native";
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from "react-native-responsive-screen";
export const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
  },
  container: {
    marginTop: 180,
    marginBottom: 10,
    marginHorizontal: 20,
    // borderColor: "red",
    // borderWidth: 2,
  },
  rsHeading: {
    fontSize: 50,
    color: "#515151",
  },
  rsSmall: {
    color: "#898989",
    fontSize: 18,
  },
  addContainer: {
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: "#FEBA47",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  rightCon: {
    marginLeft: "auto",
  },
  addContainer: {
    marginBottom: 20,
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: "#FEBA47",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  plus: {
    fontSize: 30,
  },

  greenBox: {
    backgroundColor: "#23BD81",
    height: Dimensions.get("window").height / 2,
    width: "100%",
    bottom: 0,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    flex: 1,
    ovwerflow: "hidden",
    paddingVertical: 50,
    borderWidth: 2,
    borderColor: "red",
  },
});
